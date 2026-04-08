import { Card } from "@repo/ui/card";

export const BalanceCard = ({amount, locked}: {
    amount: number;
    locked: number;
}) => {
   
   
    return <Card title={"Balance"} className="border border-gray-200 bg-white shadow-sm h-full">
        <div className="p-6 space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M3 7h15a2 2 0 012 2v6a2 2 0 01-2 2H3V7z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="text-sm font-medium text-slate-600">Available Balance</div>
                </div>
                <div className="text-lg font-semibold text-slate-900">₹{Math.max(0, amount / 100).toFixed(2)}</div>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-slate-700">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 17a2 2 0 100-4 2 2 0 000 4z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 8V7a5 5 0 10-10 0v1" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="text-sm font-medium text-slate-600">Locked Balance</div>
                </div>
                <div className="text-lg font-semibold text-slate-900">₹{Math.max(0, locked / 100).toFixed(2)}</div>
            </div>

            <div className="flex items-center gap-4 py-3">
                <div className="flex-1 border-l-4 border-blue-500 pl-4 bg-blue-50/50 rounded-md py-2">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-md bg-white flex items-center justify-center text-blue-700">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#1E40AF" strokeWidth="1.5"/><path d="M12 8v8" stroke="#1E40AF" strokeWidth="1.5" strokeLinecap="round"/></svg>
                            </div>
                            <div className="text-sm font-semibold text-blue-900">Total Balance</div>
                        </div>
                        <div className="text-xl font-bold text-blue-900">₹{Math.max(0, (locked + amount) / 100).toFixed(2)}</div>
                    </div>
                                        <div className="mt-2">
                                                <div className="h-8 w-full">
                                                    <svg width="100%" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                                                        <polyline points="0,24 20,20 40,12 60,16 80,8 100,10 120,6" stroke="#0EA5E9" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                                                    </svg>
                                                </div>
                                        </div>
                </div>
            </div>
        </div>
    </Card>
}