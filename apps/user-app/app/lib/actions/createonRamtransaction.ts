"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";
export default async function Createonramptransaction({amount,provider}:{amount:string,provider:string}){
    // console.log("🔍 Debug: Getting session...");
    const session = await getServerSession(authOptions);

    if (!session) {
        console.error("❌ No session found. User might not be logged in.");
        return  // Or handle this case appropriately
    }

    const userid = Number(session?.user?.id);
    if (!userid || Number.isNaN(userid)) {
        console.error('Invalid session user id:', session?.user?.id);
        throw new Error('Invalid session. Please sign in again.');
    }

    // Ensure the user exists in the database (avoid foreign key violations)
    const dbUser = await prisma.user.findUnique({ where: { id: userid } });
    if (!dbUser) {
        console.error(`User id ${userid} not found in database`);
        throw new Error('User not found in database. Please sign up.');
    }

    const token1 = Math.random().toString(36).slice(2);

    // Validate and convert amount
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
        console.error('Invalid amount for onramp transaction:', amount);
        throw new Error('Invalid amount');
    }
    const paiseAmount = Math.round(numericAmount * 100);

    // Create the onRampTransaction in the database
    try {
        await prisma.onRampTransaction.create({
            data: {
                userId: userid,
                amount: paiseAmount,
                startTime: new Date(),
                token: token1,
                provider,
                status: "Processing",
                type: "DEPOSIT"
            }
        });
    } catch (e) {
        console.error('Failed to create onRampTransaction:', e);
        throw e;
    }

    // Create redirect URL for bank payment simulation
    const paise = Number(amount) * 100; // Convert to paise
    const bankServerUrl = process.env.NEXT_PUBLIC_BANKSERVER_URL || 'http://localhost:3004';
    const redirectUrl = `${bankServerUrl}/start-payment?token=${token1}&amount=${paise}&user_identifier=${userid}`;
    
    return {
        token: token1,
        redirectUrl: redirectUrl
    };
}