"use server"
import axios from "axios"
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
            status: "Processing"
        }
    });

    // Send a request to the dummy endpoint
    console.log(process.env.NEXT_PUBLIC_BANKSERVER_URL,"hiiii")
    await axios.post(`${process.env.NEXT_PUBLIC_BANKSERVER_URL || ""}/dummy`, {

        token: token1,
        user_identifier: userid,
        amount: amount
    });

    return token1;
}