"use server"

import db from '@repo/db/client'
import { getServerSession } from "next-auth";
import { authOptions } from '../app/lib/auth';
export default async function p2ptransferserver(limit = 200) {
  let session = null;

  try{
    session = await getServerSession(authOptions);
    
    
    if (!session?.user) {
      return {
        status: 401,
        data: {
          message: 'Unauthorized'
        }
      }
    }
    
    const transfer=await db.p2pTransfer.findMany({
      take: limit,
      orderBy: {
        timestamp: "desc"
      },
      select: {
        id: true,
        amount: true,
        timestamp: true,
        fromUserId: true,
        toUserId: true
      },
      where:{
        OR:[{
        fromUserId:Number(session?.user?.id)},
        {toUserId:Number(session?.user?.id)
        }]
      }
  })
  return {transfer,session}
}
  catch (error) {
    console.error("Error fetching p2p transfers", error);
    return { transfer: [], session };
  }
}
