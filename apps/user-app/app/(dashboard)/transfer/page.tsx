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
                    })).sort((a,b)=>(b.timestamp.getTime())-(a.timestamp.getTime())).slice(0,15)
                );
                
            } catch (error) {
                console.error("Error fetching transfers ❌", error);
            }
        }

        fetchTransfers();
    }, []);
   
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Enhanced Header Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-3">Transfer History</h1>
                            <p className="text-lg text-gray-600">Track all your peer-to-peer transactions</p>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1">Total Transfers</p>
                                <p className="text-2xl font-bold text-blue-600">{transfers.length}</p>
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                                <span className="text-2xl">💸</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Card 
                    title="Recent Transfers" 
                    className="w-full bg-white border border-gray-200 shadow-sm"
                >
                    <div className="p-6">
                        <div className="max-h-[500px] overflow-y-auto">
                            {transfers.length > 0 ? (
                                <div className="space-y-4">
                                    {transfers.map((t, index) => (
                                        <div 
                                            key={t.id} 
                                            className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                    Number(session1?.data?.user?.id) === t.fromUserId 
                                                        ? 'bg-red-100 text-red-600' 
                                                        : 'bg-green-100 text-green-600'
                                                }`}>
                                                    {Number(session1?.data?.user?.id) === t.fromUserId ? '↗' : '↙'}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {Number(session1?.data?.user?.id) === t.fromUserId ? "Sent Money" : "Received Money"}
                                                    </div>
                                                    <div className="text-gray-500 text-xs">
                                                        {t.timestamp.toLocaleString(undefined, {
                                                            year: 'numeric',
                                                            month: 'short',
                                                            day: 'numeric',
                                                            hour: '2-digit',
                                                            minute: '2-digit'
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-4">
                                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                                    Success
                                                </span>
                                                <span className={`font-semibold ${
                                                    Number(session1?.data?.user?.id) === t.fromUserId 
                                                        ? 'text-red-600' 
                                                        : 'text-green-600'
                                                }`}>
                                                    {Number(session1?.data?.user?.id) === t.fromUserId ? "-" : "+"} ₹{(t.amount / 100).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 font-medium">No transfers yet</p>
                                    <p className="text-gray-400 text-sm mt-1">Your P2P transfers will appear here</p>
                                </div>
                            )}
                        </div>
                        
                        {transfers.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
                                Showing {transfers.length} transfer{transfers.length !== 1 ? 's' : ''}
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}
