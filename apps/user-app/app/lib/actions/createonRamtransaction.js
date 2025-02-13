"use server";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Createonramptransaction;
const axios_1 = __importDefault(require("axios"));
const next_auth_1 = require("next-auth");
const auth_1 = require("../auth");
const client_1 = __importDefault(require("@repo/db/client"));
async function Createonramptransaction({ amount, provider }) {
    console.log("🔍 Debug: Getting session...");
    const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
    if (!session) {
        console.error("❌ No session found. User might not be logged in.");
        return; // Or handle this case appropriately
    }
    const userid = Number(session?.user?.id);
    const token1 = (Math.random()).toString();
    // Create the onRampTransaction in the database
    await client_1.default.onRampTransaction.create({
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
    await axios_1.default.post("http://localhost:3004/dummy", {
        token: token1,
        user_identifier: userid,
        amount: amount
    });
    return token1;
}
