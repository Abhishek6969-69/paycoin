import express from "express";
import db from "@repo/db/client";
import { z } from "zod";
import crypto from "crypto";
require('dotenv').config();
const app = express();
app.use(express.json()) 
const webhookschema = z.object({
    token: z.string(),
    user_identifier: z.union([z.string(), z.number()]),
    amount:  z.number()
});
app.post("/hdfcWebhook", async (req, res) => {
    console.log("Webhook received:", { 
        body: req.body, 
        headers: {
            'x-hdfc-signature': req.headers['x-hdfc-signature'],
            'content-type': req.headers['content-type']
        }
    });

    // Validate webhook signature for security
    const receivedSignature = req.headers['x-hdfc-signature'] as string;
    const webhookSecret = process.env.WEBHOOK_SECRET || "dev_secret";
    
    if (receivedSignature) {
        const expectedSignature = crypto.createHmac('sha256', webhookSecret)
            .update(JSON.stringify(req.body))
            .digest('hex');
        
        if (receivedSignature !== expectedSignature) {
            console.error("Invalid webhook signature");
            return res.status(401).json({ error: "Invalid signature" });
        }
    }

    const parsed = webhookschema.safeParse(req.body);

    if (!parsed.success) {
        console.error("Invalid webhook payload:", parsed.error);
        return res.status(400).json({ 
            error: "Invalid input", 
            details: parsed.error.issues 
        });
    }
   
    const { token, user_identifier, amount } = parsed.data;

    if (!token) {
        return res.status(400).json({ error: "Token is required" });
    }
    const onramptrans = await db.onRampTransaction.findFirst({ where: { token } });

    if (!onramptrans) {
        console.error(`On-ramp transaction not found for token=${token}`);
        return res.status(404).json({ error: 'Transaction not found' });
    }

    if (onramptrans.status === "Success") {
        return res.json({ msg: "payment is already done you are trying again" });
    }

    // Ensure amount is an integer (paisa). Defensive: round if float provided.
    const amountInt = Number.isFinite(amount) ? Math.round(amount) : NaN;
    if (Number.isNaN(amountInt) || amountInt < 0) {
        console.error('Invalid amount in webhook payload:', amount);
        return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentInformation: {
        token: string;
        userId: string;
        amount: number;
    } = {
        token: token,
        userId: user_identifier.toString(),
        amount: amountInt,
    };

    try {
        // Check transaction type to determine if we should increment or decrement balance
        const transactionType = onramptrans.type || "DEPOSIT";

        await db.$transaction(async (tx) => {
            // Ensure bank has a balance record (initialize with ₹100 crores if not exists)
            const bankBalance = await tx.bankBalance.upsert({
                where: { id: 1 },
                update: {},
                create: {
                    id: 1,
                    totalAmount: BigInt(10000000000) // ₹100 crores in paisa
                }
            });

            // For withdrawals, check if bank has sufficient funds
            if (transactionType === "WITHDRAW") {
                if (bankBalance.totalAmount < BigInt(paymentInformation.amount)) {
                    console.error(`Bank insufficient funds: Requested ${paymentInformation.amount} paisa, Available ${bankBalance.totalAmount} paisa`);
                    throw new Error("Withdrawal service temporarily unavailable. Please try again later.");
                }
            }

            // Ensure user has a balance record
            const userBalance = await tx.balance.upsert({
                where: { userId: Number(paymentInformation.userId) },
                update: {},
                create: {
                    userId: Number(paymentInformation.userId),
                    amount: 0,
                    locked: 0
                }
            });

            // For withdrawals, check if user has sufficient balance
            if (transactionType === "WITHDRAW") {
                if (userBalance.amount < Number(paymentInformation.amount)) {
                    throw new Error("Insufficient user funds for withdrawal");
                }
            }

            // Update user balance
            await tx.balance.update({
                where: { userId: Number(paymentInformation.userId) },
                data: {
                    amount: {
                        [transactionType === "WITHDRAW" ? "decrement" : "increment"]: Number(paymentInformation.amount)
                    }
                }
            });

            // Update bank balance (opposite of user balance)
            const updatedBankBalance = await tx.bankBalance.update({
                where: { id: 1 },
                data: {
                    totalAmount: {
                        [transactionType === "WITHDRAW" ? "decrement" : "increment"]: BigInt(paymentInformation.amount)
                    }
                }
            });

            // Update transaction status
            await tx.onRampTransaction.updateMany({
                where: { token: paymentInformation.token },
                data: { status: "Success" }
            });

            // Log bank balance changes (backend only)
            const balanceInRupees = Number(updatedBankBalance.totalAmount) / 100;
            console.log(`[BANK] ${transactionType}: ₹${paymentInformation.amount / 100} | Bank Balance: ₹${balanceInRupees.toLocaleString('en-IN')} | User: ${paymentInformation.userId}`);
        }, {
            timeout: 10000 // Increase timeout to 10 seconds
        });

        console.log(`Payment processed successfully: ${token} - ₹${amount/100} for user ${user_identifier}`);
        res.json({
            success: true,
            message: "Payment captured successfully",
            token: token,
            amount: amount
        });
    } catch (e) {
        console.error("Webhook processing error:", e instanceof Error ? e.stack || e.message : e);

        // Prisma missing model/table errors (e.g., P2021) are common when migrations haven't been applied
        if (e && typeof e === 'object' && (e as any).code === 'P2021') {
            return res.status(500).json({
                success: false,
                error: 'Database table missing',
                message: `Prisma model/table ${(e as any).meta?.modelName || 'unknown'} not found. Please run migrations and seed the DB.`
            });
        }

        res.status(500).json({
            success: false,
            error: "Error while processing webhook",
            message: e instanceof Error ? e.message : "Unknown error"
        });
    }

})

app.listen(process.env.PORT || 3003);