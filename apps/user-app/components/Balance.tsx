import { Card } from "@repo/ui/card";

export const BalanceCard = ({amount, locked}: {
    amount: number;
    locked: number;
}) => {
   
   
    return <Card title={"Balance"} className="border border-gray-200 bg-white shadow-sm">
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="text-sm font-medium text-gray-600">
                    Available Balance
                </div>
                <div className="text-lg font-semibold text-gray-900">
                    ₹{Math.max(0, amount / 100).toFixed(2)}
                </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <div className="text-sm font-medium text-gray-600">
                    Locked Balance
                </div>
                <div className="text-lg font-semibold text-gray-900">
                    ₹{Math.max(0, locked / 100).toFixed(2)}
                </div>
            </div>
            <div className="flex justify-between items-center py-3 bg-blue-50 -mx-6 px-6 rounded-lg">
                <div className="text-sm font-semibold text-blue-900">
                    Total Balance
                </div>
                <div className="text-xl font-bold text-blue-900">
                    ₹{Math.max(0, (locked + amount) / 100).toFixed(2)}
                </div>
            </div>
        </div>
    </Card>
}