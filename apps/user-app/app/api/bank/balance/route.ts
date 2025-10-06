import { NextResponse } from "next/server";
import prisma from "@repo/db/client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    // Simple admin protection - only allow access with secret key
    const adminKey = request.nextUrl.searchParams.get('admin_key');
    if (adminKey !== 'dev_admin_2024') {
        return NextResponse.json(
            { error: "Unauthorized - Admin access only" },
            { status: 401 }
        );
    }

    try {
        // Get bank balance and user statistics
        console.log('Fetching bankBalance...');
        const bankBalance = await prisma.bankBalance.findFirst({ where: { id: 1 } });
        console.log('bankBalance result:', !!bankBalance);

        console.log('Counting users...');
        const totalUsers = await prisma.user.count();
        console.log('totalUsers:', totalUsers);

        console.log('Aggregating user balances...');
        const totalUserBalances = await prisma.balance.aggregate({ _sum: { amount: true } });
        console.log('totalUserBalances:', totalUserBalances);

        console.log('Counting transactions...');
        const totalTransactions = await prisma.onRampTransaction.count();
        const successfulTransactions = await prisma.onRampTransaction.count({ where: { status: "Success" } });

        if (!bankBalance) {
            return NextResponse.json({
                error: "Bank not initialized yet"
            });
        }

        // Convert BigInt to number for JSON serialization
        const bankBalanceInRupees = Number(bankBalance.totalAmount) / 100;
        const userBalancesInRupees = (totalUserBalances._sum.amount || 0) / 100;

        return NextResponse.json({
            success: true,
            bank: {
                totalReserves: bankBalanceInRupees,
                totalReservesFormatted: `₹${bankBalanceInRupees.toLocaleString('en-IN')}`,
                reservesInCrores: `₹${(bankBalanceInRupees / 10000000).toFixed(2)} Cr`
            },
            users: {
                totalUsers,
                totalUserBalances: userBalancesInRupees,
                totalUserBalancesFormatted: `₹${userBalancesInRupees.toLocaleString('en-IN')}`
            },
            transactions: {
                total: totalTransactions,
                successful: successfulTransactions,
                successRate: totalTransactions > 0 ? `${((successfulTransactions / totalTransactions) * 100).toFixed(1)}%` : "0%"
            },
            healthCheck: {
                bankSolvency: bankBalanceInRupees > 0 ? "HEALTHY" : "CRITICAL",
                totalCirculation: bankBalanceInRupees + userBalancesInRupees
            }
        });
    } catch (error: any) {
        console.error("Error fetching bank admin data:", error);
        // Prisma P2021 indicates the underlying table doesn't exist (migrations not applied)
        if (error?.code === 'P2021' && error?.meta?.modelName) {
            return NextResponse.json(
                {
                    success: false,
                    error: `Database model ${error.meta.modelName} not found. Run prisma migrate dev or apply migrations and seed the DB.`
                },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: false, error: "Failed to fetch bank data" },
            { status: 500 }
        );
    }
}