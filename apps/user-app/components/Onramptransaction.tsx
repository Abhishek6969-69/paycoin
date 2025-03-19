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

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Success":
        return "text-green-400";
      case "Pending":
        return "text-yellow-400";
      case "Failed":
        return "text-red-400";
      case "Processing":
        return "text-blue-400";
      default:
        return "text-gray-400";
    }
  };

 
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
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8 text-gray-300 ">
          No Recent Transactions
        </div>
      </Card>
    );
  }

  return (
    <Card
      title="Recent Transactions"
      className="border p-4 rounded mx-4 h-[43vh] overflow-hidden"
    >
      <div className="pt-2 max-h-[300px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {sortedTransactions.map((t, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-none"
          >
            <div>
              <div className="text-sm font-medium text-gray-200">
                Received INR
              </div>
              <div className="text-gray-400 text-xs">
                {new Date(t.time).toDateString()}
              </div>
            </div>
            <div
              className={`${
                t.status === "Processing" ? "mr-6" : " "
              } flex items-center justify-center `}
            >
              <div>
                <span
                  className={`px-2 py-0.5 text-sm rounded ${getStatusColor(
                    t.status
                  )}`}
                >
                  {t.status}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-green-400 font-semibold">
                + Rs {t.amount / 100}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
