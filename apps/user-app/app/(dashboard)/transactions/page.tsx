import prisma from "@repo/db/client";
import Addmoney from "../../../components/Addmoney";
import { OnRampTransactions } from "../../../components/Onramptransaction";
import { BalanceCard } from "../../../components/Balance";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";


async function getBalance() {
    const session = await getServerSession(authOptions);
   console.log("session",session)
   if(!session){
    return {};
   }
   try{
    const balance = await prisma.balance.findFirst({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
   }
   catch(e){
    await prisma.$disconnect()
   }
   finally{
    async()=>{
        await prisma.$disconnect()
    }
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
    
    return txns.map(t => ({
        key:t.id,
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function() {
    const balance = await getBalance();
    
    const transactions = await getOnRampTransactions();

    return <div className="w-[100%] h-screen text-[#333333] bg-[FBFBFB]">
        <div className="text-4xl text-[#E0E1DD] pt-8 mb-8 font-bold">
            Transfer
           
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
            <div>
                <Addmoney />
            </div>
            <div>
                
                     <BalanceCard amount={balance?.amount || 0} locked={balance?.locked || 0} />
                     <div className="pt-4">
                         <OnRampTransactions  transactions={transactions } />
                     </div>
                
               
            </div>
        </div>
    </div>
}