export const dynamic = "force-dynamic";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import prisma from "@repo/db/client";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = Number(session.user.id);

    const balance = await prisma.balance.upsert({
      where: { userId },
      update: {},
      create: {
        userId,
        amount: 0,
        locked: 0
      }
    });

    return NextResponse.json({
      balance: Math.max(0, balance?.amount || 0)
    });

  } catch (error) {
    console.error("Balance fetch error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}