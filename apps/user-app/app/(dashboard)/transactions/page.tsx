export const dynamic = "force-dynamic";
import prisma from "@repo/db/client";
import Addmoney from "../../../components/Addmoney";
import { OnRampTransactions } from "../../../components/Onramptransaction";
import { BalanceCard } from "../../../components/Balance";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import TransactionStatus from "../../../components/TransactionStatus";
import { Suspense } from "react";

function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(value);
}

async function getBalance(userId: number) {
    try{
        const existingBalance = await prisma.balance.findUnique({
            where: {
                userId
            }
        });

        const balance = existingBalance ?? await prisma.balance.create({
            data: {
                userId,
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
}

async function getOnRampTransactions(userId: number) {
    const txns = await prisma.onRampTransaction.findMany({
        orderBy: {
            startTime: "desc"
        },
        take: 50,
        select: {
            id: true,
            startTime: true,
            amount: true,
            status: true,
            provider: true
        },
        where: {
            userId
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

async function getOnRampSummary(userId: number) {
    const [statusSummary, successAggregate] = await Promise.all([
        prisma.onRampTransaction.groupBy({
            by: ["status"],
            where: { userId },
            _count: { _all: true }
        }),
        prisma.onRampTransaction.aggregate({
            where: {
                userId,
                status: "Success"
            },
            _sum: { amount: true }
        })
    ]);

    const totalTransactions = statusSummary.reduce((sum, item) => sum + item._count._all, 0);
    const successfulTransactions = statusSummary.find((item) => item.status === "Success")?._count._all ?? 0;
    const processingTransactions = statusSummary.find((item) => item.status === "Processing")?._count._all ?? 0;
    const totalAmountAdded = (successAggregate._sum.amount ?? 0) / 100;

    return {
        totalTransactions,
        successfulTransactions,
        processingTransactions,
        totalAmountAdded
    };
}

export default async function() {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.id) {
            return <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-4 lg:px-5">
                <div className="mx-auto w-full max-w-[1320px]">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
                        Please sign in to view transactions.
                    </div>
                </div>
            </div>
        }

        const userId = Number(session.user.id);
        const [balance, transactions, summary] = await Promise.all([
            getBalance(userId),
            getOnRampTransactions(userId),
            getOnRampSummary(userId)
        ]);

        return <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-4 lg:px-5">
            <div className="mx-auto w-full max-w-[1320px] space-y-6">
                <Suspense fallback={<div className="h-4"></div>}>
                    <TransactionStatus />
                </Suspense>

                <section className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 7h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3V7z" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">Payments</p>
                                <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">Transactions</h1>
                                <p className="mt-2 text-sm text-slate-500 sm:text-base">Overview of your wallet activity and on-ramp history.</p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Total Transactions</p>
                            <p className="mt-1 text-2xl font-semibold text-slate-950">{summary.totalTransactions}</p>
                        </div>
                    </div>

                    <div className="grid gap-3 px-6 py-5 sm:grid-cols-3 sm:px-8">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                            <p className="text-sm font-medium text-slate-600">Successful</p>
                            <p className="mt-2 text-xl font-semibold text-emerald-600">{summary.successfulTransactions}</p>
                            <p className="mt-1 text-xs text-slate-500">completed transactions</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                            <p className="text-sm font-medium text-slate-600">In Progress</p>
                            <p className="mt-2 text-xl font-semibold text-amber-600">{summary.processingTransactions}</p>
                            <p className="mt-1 text-xs text-slate-500">pending confirmations</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                            <p className="text-sm font-medium text-slate-600">Money Added</p>
                            <p className="mt-2 text-xl font-semibold text-slate-950">{formatCurrency(summary.totalAmountAdded)}</p>
                            <p className="mt-1 text-xs text-slate-500">successful on-ramp amount</p>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
                    <Addmoney />
                    <BalanceCard amount={balance?.amount || 0} locked={balance?.locked || 0} />
                </section>

                <OnRampTransactions transactions={transactions} />
            </div>
        </div>
    } catch (error) {
        console.error("Error in transactions page:", error);
        return <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-4 lg:px-5">
            <div className="mx-auto w-full max-w-[1320px]">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                    <h1 className="text-red-800 font-semibold text-xl mb-2">Error Loading Transactions</h1>
                    <p className="text-red-700">Unable to load the transactions page. Please try refreshing the page.</p>
                    <p className="text-red-600 text-sm mt-2">Error details: {error instanceof Error ? error.message : 'Unknown error'}</p>
                </div>
            </div>
        </div>
    }
}
