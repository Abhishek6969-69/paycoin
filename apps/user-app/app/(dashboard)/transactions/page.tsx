export const dynamic = "force-dynamic";
import prisma from "@repo/db/client";
import Addmoney from "../../../components/Addmoney";
import { OnRampTransactions } from "../../../components/Onramptransaction";
import { BalanceCard } from "../../../components/Balance";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import TransactionStatus from "../../../components/TransactionStatus";
import { Suspense } from "react";


async function getBalance() {
    const session = await getServerSession(authOptions);
    if(!session){
        return { amount: 0, locked: 0 };
    }
    try{
        // Use upsert to ensure balance record exists
        const balance = await prisma.balance.upsert({
            where: {
                userId: Number(session?.user?.id)
            },
            update: {},
            create: {
                userId: Number(session?.user?.id),
                amount: 0,
                locked: 0
            }
        });
        return {
            amount: Math.max(0, balance?.amount || 0),
            locked: Math.max(0, balance?.locked || 0)
        }
    }
    catch(e){
        console.error("Error fetching balance:", e);
        return { amount: 0, locked: 0 };
    }
    finally{
        await prisma.$disconnect();
    }
   
    
   
    
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
 
    if (!session?.user?.id) {
        return []; // Ensure an empty array is returned if no user session
    }

    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    
    return txns.map((t:any) => ({
        key:t.id,
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {
    try {
        const balance = await getBalance();
        const transactions = await getOnRampTransactions();

        return <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <Suspense fallback={<div className="h-4"></div>}>
                    <TransactionStatus />
                </Suspense>
                
                {/* Enhanced Header Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-3">Transactions</h1>
                            <p className="text-lg text-gray-600">Manage your wallet and view transaction history</p>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm text-gray-500 mb-1">Total Transactions</p>
                                <p className="text-2xl font-bold text-green-600">{transactions.length}</p>
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center border border-green-200">
                                <span className="text-2xl">💳</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Grid Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
                        <Addmoney />
                    </div>
                    <div className="space-y-8">
                        <BalanceCard amount={balance?.amount || 0} locked={balance?.locked || 0} />
                        <OnRampTransactions transactions={transactions} />
                    </div>
                </div>
            </div>
        </div>
    } catch (error) {
        console.error("Error in transactions page:", error);
        return <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                    <h1 className="text-red-800 font-semibold text-xl mb-2">Error Loading Transactions</h1>
                    <p className="text-red-700">Unable to load the transactions page. Please try refreshing the page.</p>
                    <p className="text-red-600 text-sm mt-2">Error details: {error instanceof Error ? error.message : 'Unknown error'}</p>
                </div>
            </div>
        </div>
    }
}