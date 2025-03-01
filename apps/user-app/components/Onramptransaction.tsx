import { Card } from "@repo/ui/card";

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
  const sortedTransactions = [...transactions]
    .sort((a, b) => b.time.getTime() - a.time.getTime()) // Sort by latest timestamp
    .slice(0, 10); // Limit to top 10

  if (!sortedTransactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8 text-gray-300">
          No Recent Transactions
        </div>
      </Card>
    );
  }

  return (
    <Card title="Recent Transactions" className="border p-4 rounded mx-4">
      <div className="pt-2 max-h-[300px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {sortedTransactions.map((t, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-700 pb-2 last:border-none"
          >
            <div>
              <div className="text-sm font-medium text-gray-200">
                Received INR
              </div>
              <div className="text-gray-400 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center text-green-400 font-semibold">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
