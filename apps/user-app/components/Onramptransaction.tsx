"use client"
import { Card } from "@repo/ui/card";
import { useEffect, useState } from "react";

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
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const updated = updatedTransactions.map((t) => {
        if (t.status === "Processing") {
          const elapsedMinutes = (now - new Date(t.time).getTime()) / 60000;
          if (elapsedMinutes > 1440) {
            return { ...t, status: "Failed" };
          }
        }
        return t;
      });
      setUpdatedTransactions(updated);
    }, 10000); 

    return () => clearInterval(interval);
  }, [updatedTransactions]);

  const sortedTransactions = [...updatedTransactions]
    .sort((a, b) => b.time.getTime() - a.time.getTime()) // Sort by latest timestamp
    .slice(0, 10); // Limit to top 10

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
      <div className="p-6">
        <div className="max-h-[300px] overflow-y-auto space-y-4">
          {sortedTransactions.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">
                  Received INR
                </div>
                <div className="text-gray-500 text-xs mt-1">
                  {new Date(t.time).toDateString()}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    t.status === "Success" 
                      ? "bg-green-100 text-green-800"
                      : t.status === "Processing" 
                      ? "bg-yellow-100 text-yellow-800"
                      : t.status === "Failed"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {t.status}
                </span>
                <span className="text-green-600 font-semibold">
                  + ₹{(t.amount / 100).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
