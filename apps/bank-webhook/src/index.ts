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
    const onramptrans= await db.onRampTransaction.findFirst({
        where:{
            token
        }
    })
  
    if(onramptrans?.status=="Success"){
        return res.json({msg:"payment is already done you are trying again"})
    }
    const paymentInformation: {
        token: string;
        userId: string;
        amount: number
    } = {
        token: token,
        userId: user_identifier.toString(),
        amount: amount
    };

    try {
        const transactionType = onramptrans?.type || "DEPOSIT";

        await db.$transaction(async (tx) => {
            const bankBalance = await tx.bankBalance.upsert({
                where: { id: 1 },
                update: {},
                create: {
                    id: 1,
                    totalAmount: BigInt(10000000000)
                }
            });

            if (transactionType === "WITHDRAW") {
                if (bankBalance.totalAmount < BigInt(paymentInformation.amount)) {
                    console.error(`Bank insufficient funds: Requested ${paymentInformation.amount} paisa, Available ${bankBalance.totalAmount} paisa`);
                    throw new Error("Withdrawal service temporarily unavailable. Please try again later.");
                }
            }

            const userBalance = await tx.balance.upsert({
                where: { userId: Number(paymentInformation.userId) },
                update: {},
                create: {
                    userId: Number(paymentInformation.userId),
                    amount: 0,
                    locked: 0
                }
            });

            if (transactionType === "WITHDRAW") {
                if (userBalance.amount < Number(paymentInformation.amount)) {
                    throw new Error("Insufficient user funds for withdrawal");
                }
            }

            await tx.balance.update({
                where: { userId: Number(paymentInformation.userId) },
                data: {
                    amount: {
                        [transactionType === "WITHDRAW" ? "decrement" : "increment"]: Number(paymentInformation.amount)
                    }
                }
            });

            const updatedBankBalance = await tx.bankBalance.update({
                where: { id: 1 },
                data: {
                    totalAmount: {
                        [transactionType === "WITHDRAW" ? "decrement" : "increment"]: BigInt(paymentInformation.amount)
                    }
                }
            });

            await tx.onRampTransaction.updateMany({
                where: { token: paymentInformation.token },
                data: { status: "Success" }
            });

            const balanceInRupees = Number(updatedBankBalance.totalAmount) / 100;
            console.info(`[BANK] ${transactionType}: ₹${paymentInformation.amount / 100} | Bank Balance: ₹${balanceInRupees.toLocaleString('en-IN')} | User: ${paymentInformation.userId}`);
        }, {
            timeout: 10000
        });

        console.info(`Payment processed successfully: ${token} - ₹${amount/100} for user ${user_identifier}`);
        res.json({
            success: true,
            message: "Payment captured successfully",
            token: token,
            amount: amount
        });
    } catch(e) {
        console.error("Webhook processing error:", e);
        res.status(500).json({
            success: false,
            error: "Error while processing webhook",
            message: e instanceof Error ? e.message : "Unknown error"
        });
    } finally {
        try {
            await db.$disconnect();
        } catch (disconnectError) {
            console.error("Error disconnecting from database:", disconnectError);
        }
    }

})

app.listen(process.env.PORT || 3003);