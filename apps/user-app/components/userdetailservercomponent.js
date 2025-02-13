"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = userdetailservercomponent;
const client_1 = __importDefault(require("@repo/db/client"));
// import { authOptions } from "app/lib/auth"
// import { getSession } from "next-auth/react"
const next_auth_1 = require("next-auth");
const auth_1 = require("app/lib/auth");
async function userdetailservercomponent() {
    const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
    const user1 = await client_1.default.user.findFirst({
        where: {
            id: Number(session?.user?.id)
        }
    });
    return user1;
}
