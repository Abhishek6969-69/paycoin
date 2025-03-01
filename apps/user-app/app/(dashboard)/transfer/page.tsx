"use client";
import { Card } from "@repo/ui/card";
import { useState, useEffect } from "react";
import p2ptransferserver from "components/p2ptransfer";
import { useSession } from "next-auth/react";

export default function Transfer() {
    const session1 = useSession();
    const [transfers, setTransfers] = useState<
        { id: number; amount: number; timestamp: Date; fromUserId: number; toUserId: number }[]
    >([]);
    
    useEffect(() => {
        async function fetchTransfers() {
            try {
                const transferData1 = await p2ptransferserver();
                const { transfer } = transferData1;
                
                if (!Array.isArray(transfer)) {
                    console.error("Invalid transfer data format ❌", transfer);
                    return;
                }

                setTransfers(
                    transfer.map(t => ({
                        ...t,
                        timestamp: new Date(t.timestamp) // Convert to Date object
                    }))
                );
                
            } catch (error) {
                console.error("Error fetching transfers ❌", error);
            }
        }

        fetchTransfers();
    }, []);

    return (
        <div className="flex mt-10 justify-center items-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
            <Card 
                title="P2P Transaction History" 
                className="w-full bg-gradient-to-br from-gray-900 to-[#1C1F3A] border border-gray-700 shadow-xl rounded-xl overflow-hidden"
            >
                <div className="pt-2 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                    {transfers.length > 0 ? (
                        <div className="divide-y divide-gray-700/50">
                            {transfers.map((t, index) => (
                                <div 
                                    key={t.id} 
                                    className="flex flex-col sm:flex-row py-5 space-y-3 sm:space-y-0 sm:justify-between px-6 hover:bg-gray-800/20 transition-colors duration-200"
                                >
                                    <div className="flex flex-col">
                                        <div className="text-sm font-medium text-gray-200">
                                            {Number(session1?.data?.user?.id) === t.fromUserId ? "Sent Money" : "Received Money"}
                                        </div>
                                        <div className="text-gray-400 text-xs mt-1">
                                            {t.timestamp.toLocaleString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </div>
                                    
                                    <div className="capitalize">
                                        {index === 0 && (
                                            <div className="text-sm font-medium text-gray-400 mb-1">Status</div>
                                        )}
                                        <span className="text-green-400 bg-green-900/20 px-3 py-1 rounded-full text-xs font-medium">
                                            Success
                                        </span>
                                    </div>
                                    
                                    <div className={`flex flex-col justify-center items-end`}>
                                        {index === 0 && (
                                            <div className="text-sm font-medium text-gray-400 mb-1 text-right">Amount</div>
                                        )}
                                        <span className={`${Number(session1?.data?.user?.id) === t.fromUserId ? 'text-red-400' : 'text-green-400'} font-medium text-base`}>
                                            {Number(session1?.data?.user?.id) === t.fromUserId ? "-" : "+"} ₹{(t.amount / 100).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 px-4">
                            <div className="bg-gray-800/50 rounded-full p-4 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-center">No transactions found</p>
                            <p className="text-gray-500 text-sm text-center mt-1">Your transaction history will appear here</p>
                        </div>
                    )}
                </div>
                
                {transfers.length > 0 && (
                    <div className="bg-gray-900/80 py-4 px-6 text-center text-xs text-gray-400">
                        Showing {transfers.length} transaction{transfers.length !== 1 ? 's' : ''}
                    </div>
                )}
            </Card>
        </div>
    );
}
