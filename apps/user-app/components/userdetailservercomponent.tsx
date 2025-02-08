"use server"
import prisma from "@repo/db/client"
// import { authOptions } from "app/lib/auth"
// import { getSession } from "next-auth/react"
import { getServerSession } from "next-auth"
import { authOptions } from "app/lib/auth"

export default async function userdetailservercomponent() {
    const session = await getServerSession(authOptions)
  const user1 = await prisma.user.findFirst({
    where:{
       id:Number(session?.user?.id)
    }
  })

return user1;
}

