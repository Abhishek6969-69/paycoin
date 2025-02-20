"use server"

import db from '@repo/db/client'
import { getServerSession } from "next-auth";
import { authOptions } from '../app/lib/auth';
export default async function p2ptransferserver() {

  try{
    const session = await getServerSession(authOptions);
    
    
    if (!session?.user) {
      return {
        status: 401,
        data: {
          message: 'Unauthorized'
        }
      }
    }
    
    const transfer=await db.p2pTransfer.findMany({ 
      where:{
        OR:[{
        fromUserId:Number(session?.user?.id)},
        {toUserId:Number(session?.user?.id)
        }]
      }
  })
  return {transfer,session}
}
  finally {
    await db.$disconnect(); 
  }




}
