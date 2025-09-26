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
    const token1 = (Math.random()).toString();

    // Create the onRampTransaction in the database
    await prisma.onRampTransaction.create({
        data: {
            userId: userid,
            amount: Number(amount) * 100,
            startTime: new Date(),
            token: token1,
            provider,
            status: "Processing",
            type: "DEPOSIT"
        }
    });

    // Create redirect URL for bank payment simulation
    const paise = Number(amount) * 100; // Convert to paise
    const bankServerUrl = process.env.NEXT_PUBLIC_BANKSERVER_URL || 'http://localhost:3004';
    const redirectUrl = `${bankServerUrl}/start-payment?token=${token1}&amount=${paise}&user_identifier=${userid}`;
    
    return {
        token: token1,
        redirectUrl: redirectUrl
    };
}