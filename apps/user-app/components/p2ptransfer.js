"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = p2ptransferserver;
const client_1 = __importDefault(require("@repo/db/client"));
const next_auth_1 = require("next-auth");
const auth_1 = require("../app/lib/auth");
async function p2ptransferserver() {
    try {
        const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
        if (!session?.user) {
            return {
                status: 401,
                data: {
                    message: 'Unauthorized'
                }
            };
        }
        const transfer = await client_1.default.p2pTransfer.findMany({
            where: {
                OR: [{
                        fromUserId: Number(session?.user?.id)
                    },
                    { toUserId: Number(session?.user?.id)
                    }]
            }
        });
        return { transfer, session };
    }
    finally {
        await client_1.default.$disconnect();
    }
}
