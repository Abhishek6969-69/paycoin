"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

interface TransferResponse {
  success: boolean;
  message: string;
}

export default async function P2PTransfermoney(to: string, amount: number): Promise<TransferResponse> {
  const session = await getServerSession(authOptions);
  const from = session?.user?.id;

  if (!from) {
    return { success: false, message: "You must be logged in to send money" };
  }

  const toUser = await prisma.user.findFirst({
    where: { number: to },
  });

  if (!toUser) {
    return { success: false, message: "Recipient not found" };
  }

  try {
    await prisma.$transaction(async (tx) => {
      const fromBalance = await tx.balance.findUnique({
        where: { userId: Number(from) },
      });
      if (!fromBalance || fromBalance.amount < amount) {
        throw new Error("Insufficient funds");
      }

      await tx.balance.update({
        where: { userId: Number(from) },
        data: { amount: { decrement: amount } },
      });

      await tx.balance.update({
        where: { userId: toUser.id },
        data: { amount: { increment: amount } },
      });

      await tx.p2pTransfer.create({
        data: {
          amount,
          timestamp: new Date(),
          fromUserId: Number(from),
          toUserId: toUser.id,
        },
      });
    });

    return { success: true, message: "Transfer completed successfully" };
  } catch (error) {
    console.error("Transfer error:", error);
    const message =
      error instanceof Error && error.message === "Insufficient funds"
        ? "Insufficient funds"
        : "Transfer failed due to an error";
    return { success: false, message };
  } finally {
    await prisma.$disconnect();
  }
}