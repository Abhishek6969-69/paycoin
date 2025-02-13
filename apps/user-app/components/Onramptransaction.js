"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnRampTransactions = void 0;
const card_1 = require("@repo/ui/card");
const OnRampTransactions = ({ transactions }) => {
    if (!transactions.length) {
        return <card_1.Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </card_1.Card>;
    }
    return <card_1.Card title="Recent Transactions" className="border p-4  rounded   mx-4">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </card_1.Card>;
};
exports.OnRampTransactions = OnRampTransactions;
