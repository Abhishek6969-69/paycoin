"use client"
import { Card } from "@repo/ui/card";
import { useEffect, useMemo, useState } from "react";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) => {
  const [updatedTransactions, setUpdatedTransactions] = useState(transactions);

  useEffect(() => {
    setUpdatedTransactions(transactions);
  }, [transactions]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setUpdatedTransactions((current) =>
        current.map((t) => {
          if (t.status === "Processing") {
            const elapsedMinutes = (now - new Date(t.time).getTime()) / 60000;
            if (elapsedMinutes > 1440) {
              return { ...t, status: "Failed" };
            }
          }
          return t;
        })
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const sortedTransactions = useMemo(
    () =>
      [...updatedTransactions]
        .sort((a, b) => b.time.getTime() - a.time.getTime())
        .slice(0, 10),
    [updatedTransactions]
  );

  if (!sortedTransactions.length) {
    return (
      <Card title="Recent Transactions" className="border border-gray-200 bg-white shadow-sm">
        <div className="p-12 text-center">
          <div className="text-gray-400 mb-2">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">No transactions yet</p>
          <p className="text-gray-400 text-xs mt-1">Your transactions will appear here</p>
        </div>
      </Card>
    );
  }
  return (
    <Card
      title="Recent Transactions"
      className="border border-gray-200 bg-white shadow-sm h-[400px] overflow-hidden"
    >
      <div className="p-4">
        <div className="max-h-[300px] overflow-y-auto space-y-3">
          {sortedTransactions.map((t, index) => {
            // Determine type icon and sign
            const type = t.provider || 'topup';
            const isCredit = t.status === 'Success' && (t.amount > 0);
            const sign = isCredit ? '+' : '-';
            const amountClass = isCredit ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold';

            return (
              <div
                key={index}
                className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-all duration-150"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-slate-50 flex items-center justify-center text-slate-700">
                    {type === 'topup' ? (
                      <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none"><path d="M12 5v14" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 12h14" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : (
                      <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none"><path d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 10l5 5 5-5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-900">{t.provider || 'Top-up'}</div>
                    <div className="text-xs text-slate-500">{new Date(t.time).toLocaleString()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    t.status === 'Success' ? 'bg-green-50 text-green-700' : t.status === 'Processing' ? 'bg-yellow-50 text-yellow-700' : 'bg-red-50 text-red-700'
                  }`}>
                    {t.status}
                  </span>
                  <span className={amountClass}>{`${sign} ₹${(Math.abs(Number(t.amount || 0)) / 100).toFixed(2)}`}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  );
};
