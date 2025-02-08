"use client"
import { Card } from "@repo/ui/card"
import { useState, useEffect } from "react"
import p2ptransferserver from "components/p2ptransfer";
import { useSession } from "next-auth/react";

export default function Transfer() {
    const session1=useSession()
    const [transfers, setTransfers] = useState<
    { id: number; amount: number; timestamp: Date; fromUserId: number; toUserId: number }[]
  >([]);
    
    useEffect(() => {
        async function fetchTransfers() {
            try {
                const transferData1 = await p2ptransferserver();
                const {transfer}=transferData1
                
                const transferData=transfer;
                console.log(transfer,"p2p")
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
        <div className="flex mt-10 justify-center items-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto">
            <Card title="P2P Transaction History" className="text-[#333333] bg-[FBFBFB] w-full">
                <div className="pt-2">
                    {transfers.length > 0 ? (
                        transfers.map((t) => (
                            <div key={t.id} className="flex flex-col sm:flex-row py-4 space-y-2 sm:space-y-0 sm:justify-between px-4">
                                <div>
                                    <div className="text-sm">{Number(session1?.data?.user?.id) === t.fromUserId ? "Sent INR" : "Received INR"}</div>
                                    <div className="text-[#333333] text-xs">
                                        {t.timestamp.toLocaleString()}
                                    </div>
                                </div>
                                <div className="capitalize">
                                    status: <span className="text-green-500">success</span>
                                </div>
                                <div className={`${Number(session1?.data?.user?.id) === t.fromUserId ? 'text-red-500' : 'text-green-400'} flex flex-col justify-center`}>
                                    {Number(session1?.data?.user?.id) === t.fromUserId ? "-" : "+"} Rs {(t.amount / 100).toFixed(2)}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 px-4">No transactions found</p>
                    )}
                </div>
            </Card>
        </div>
    );
}
