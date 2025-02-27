"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function main() {
    const alice = await prisma.user.upsert({
        where: { number: '1111111111' },
        update: {},
        create: {
            number: '1111111111',
            password: await bcryptjs_1.default.hash('alice', 10),
            name: 'alice',
            Balance: {
                create: {
                    amount: 20000,
                    locked: 0
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Success",
                    amount: 20000,
                    token: "token__1",
                    provider: "HDFC Bank",
                },
            },
        },
    });
    const bob = await prisma.user.upsert({
        where: { number: '2222222222' },
        update: {},
        create: {
            number: '2222222222',
            password: await bcryptjs_1.default.hash('bob', 10),
            name: 'bob',
            Balance: {
                create: {
                    amount: 2000,
                    locked: 0
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: "Failure",
                    amount: 2000,
                    token: "token__2",
                    provider: "HDFC Bank",
                },
            },
        },
    });
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
