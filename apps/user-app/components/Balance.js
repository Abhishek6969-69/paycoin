"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceCard = void 0;
const card_1 = require("@repo/ui/card");
const BalanceCard = ({ amount, locked }) => {
    return <card_1.Card title={"Balance"} className="border p-4  rounded   mx-4">
        <div className="flex justify-between border-b border-slate-300 pb-2">
            <div>
                
                Unlocked balance
            </div>
            <div>
                {amount / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2">
            <div>
                Total Locked Balance
            </div>
            <div>
                {locked / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2">
            <div>
                Total Balance
            </div>
            <div>
                {(locked + amount) / 100} INR
            </div>
        </div>
    </card_1.Card>;
};
exports.BalanceCard = BalanceCard;
