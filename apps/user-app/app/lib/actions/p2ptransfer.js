"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = P2PTransfermoney;
const next_auth_1 = require("next-auth");
const auth_1 = require("../auth");
const client_1 = __importDefault(require("@repo/db/client"));
async function P2PTransfermoney(to, amount) {
    const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
    const from = session?.user?.id;
    if (!from) {
        return {
            message: "Error while sending"
        };
    }
    const toUser = await client_1.default.user.findFirst({
        where: {
            number: to
        }
    });
    if (!toUser) {
        return {
            message: "User not found"
        };
    }
    try {
        await client_1.default.$transaction(async (tx) => {
            const fromBalance = await tx.balance.findUnique({
                where: { userId: Number(from) },
            });
            if (!fromBalance || fromBalance.amount < amount) {
                throw new Error('Insufficient funds');
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
                    toUserId: toUser.id
                }
            });
        });
        return true;
    }
    catch (e) {
        await client_1.default.$disconnect();
        return false;
    }
    finally {
        (async () => {
            await client_1.default.$disconnect();
        });
    }
}
