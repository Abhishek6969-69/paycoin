"use client";
import { Card } from "@repo/ui/card";
import { useEffect, useState } from "react";

interface BankBalanceData {
    success: boolean;
    totalAmount: number;
    totalAmountFormatted: string;
}

export const BankBalanceCard = () => {
    const [bankBalance, setBankBalance] = useState<BankBalanceData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBankBalance = async () => {
            try {
                const response = await fetch('/api/bank/balance');
                const data = await response.json();
                setBankBalance(data);
            } catch (error) {
                console.error("Error fetching bank balance:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBankBalance();
        
        // Refresh bank balance every 30 seconds
        const interval = setInterval(fetchBankBalance, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <Card title="Bank Reserves" className="border border-gray-200 p-4 rounded mx-4 bg-white shadow-sm">
                <div className="text-center py-4">
                    <div className="animate-pulse text-gray-500">Loading...</div>
                </div>
            </Card>
        );
    }

    if (!bankBalance?.success) {
        return (
            <Card title="Bank Reserves" className="border border-red-200 p-4 rounded mx-4 bg-red-50 shadow-sm">
                <div className="text-center py-4 text-red-600">
                    Error loading bank balance
                </div>
            </Card>
        );
    }

    return (
        <Card title="🏦 Bank Reserves" className="border border-blue-200 p-4 rounded mx-4 bg-blue-50 shadow-sm">
            <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <div className="text-blue-700 font-medium">
                        Total Bank Reserves
                    </div>
                    <div className="text-2xl font-bold text-blue-900">
                        {bankBalance.totalAmountFormatted}
                    </div>
                </div>
                
                <div className="text-xs text-blue-600 text-center pt-2">
                    💡 This represents the total amount available in the bank for withdrawals
                </div>
                
                <div className="flex justify-between text-xs text-blue-600">
                    <span>Available for withdrawal</span>
                    <span className="font-mono font-medium">
                        {(bankBalance.totalAmount / 10000000).toFixed(1)}Cr
                    </span>
                </div>
            </div>
        </Card>
    );
};