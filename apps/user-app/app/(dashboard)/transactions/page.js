"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const client_1 = __importDefault(require("@repo/db/client"));
const Addmoney_1 = __importDefault(require("../../../components/Addmoney"));
const Onramptransaction_1 = require("../../../components/Onramptransaction");
const Balance_1 = require("../../../components/Balance");
const next_auth_1 = require("next-auth");
const auth_1 = require("../../lib/auth");
async function getBalance() {
    const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
    console.log("session", session);
    if (!session) {
        return {};
    }
    try {
        const balance = await client_1.default.balance.findFirst({
            where: {
                userId: Number(session?.user?.id)
            }
        });
        return {
            amount: balance?.amount || 0,
            locked: balance?.locked || 0
        };
    }
    catch (e) {
        await client_1.default.$disconnect();
    }
    finally {
        async () => {
            await client_1.default.$disconnect();
        };
    }
}
async function getOnRampTransactions() {
    const session = await (0, next_auth_1.getServerSession)(auth_1.authOptions);
    if (!session?.user?.id) {
        return []; // Ensure an empty array is returned if no user session
    }
    const txns = await client_1.default.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        key: t.id,
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }));
}
async function default_1() {
    const balance = await getBalance();
    const transactions = await getOnRampTransactions();
    return <div className="w-[100%] h-screen text-[#333333] bg-[FBFBFB]">
        <div className="text-4xl text-[#E0E1DD] pt-8 mb-8 font-bold">
            Transfer
           
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <Addmoney_1.default />
            </div>
            <div>
                
                     <Balance_1.BalanceCard amount={balance?.amount || 0} locked={balance?.locked || 0}/>
                     <div className="pt-4">
                         <Onramptransaction_1.OnRampTransactions transactions={transactions}/>
                     </div>
                
               
            </div>
        </div>
    </div>;
}
