import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/client";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { amount, provider } = await req.json();
    
    if (!amount || !provider) {
      return NextResponse.json({ error: "Amount and provider are required" }, { status: 400 });
    }

    const parsedAmount = Number(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const userid = Number(session.user.id);

    // Check if user has sufficient balance
    const userBalance = await prisma.balance.findUnique({
      where: { userId: userid }
    });

    const amountInPaise = parsedAmount * 100;
    if (!userBalance || userBalance.amount < amountInPaise) {
      return NextResponse.json({ error: "Insufficient funds" }, { status: 400 });
    }

    // Generate unique token for the withdraw transaction
    const token1 = Math.random().toString(36).substring(2, 15) + 
                  Math.random().toString(36).substring(2, 15);

    // Create withdraw transaction record
    await prisma.onRampTransaction.create({
      data: {
        provider,
        status: "Processing",
        startTime: new Date(),
        token: token1,
        userId: userid,
        amount: amountInPaise,
        type: "WITHDRAW"
      }
    });

    // Create redirect URL for bank payment simulation
    const redirectUrl = `${process.env.NEXT_PUBLIC_BANKSERVER_URL}/start-payment?token=${token1}&amount=${amountInPaise}&user_identifier=${userid}&type=withdraw`;
    
    return NextResponse.json({
      token: token1,
      redirectUrl: redirectUrl
    });

  } catch (error) {
    console.error("Withdraw transaction creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}