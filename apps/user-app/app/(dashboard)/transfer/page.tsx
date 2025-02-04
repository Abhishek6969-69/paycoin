"use client"
import { Card } from "@repo/ui/card"
import { useState, useEffect } from "react"
import p2ptransferserver from "../../../components/p2ptransfer"

export default function Transfer() {
    const [transfers, setTransfers] = useState<
    { id: number; amount: number; timestamp: Date; fromUserId: number; toUserId: number }[]
  >([]);
    
    useEffect(() => {
        async function fetchTransfers() {
            try {
                const transferData = await p2ptransferserver();
                if (!Array.isArray(transferData)) {
                    console.error("Invalid transfer data format ❌", transferData);
                    return;
                }
                setTransfers(
                    transferData.map(t => ({
                        ...t,
                        timestamp: new Date(t.timestamp)  // Convert to Date object
                    }))
                );
                
            } catch (error) {
                console.error("Error fetching transfers ❌", error);
            }
        }

        fetchTransfers();
    }, []);

    return (
        <div className="flex justify-center items-center ml-64  mr-80 h-full w-[400px] ">
            <Card title="Recent Transactions " className="text-[#333333] bg-[FBFBFB] w-[600px]">
                <div className="pt-2 ">
                    {transfers.length > 0 ? (
                        transfers.map((t) => (
                            <div key={t.id} className="flex justify-between">
                                <div>
                                    <div className="text-sm">Sent INR</div>
                                    <div className="text-[#333333] text-xs">
                                        {t.timestamp.toLocaleString()}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    + Rs { (t.amount / 100).toFixed(2) }
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No transactions found</p>
                    )}
                </div>
            </Card>
        </div>
    );
}
