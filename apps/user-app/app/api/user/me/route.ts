import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from 'app/lib/auth'
import prisma from '@repo/db/client'

export async function GET(req: Request) {
  try {
    const session: any = await getServerSession(authOptions as any)
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const userId = Number(session.user.id)
    const user = await prisma.user.findUnique({ where: { id: userId } })
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    // remove sensitive fields
    const safe = {
      id: user.id,
      name: user.name,
      number: user.number,
      profileImage: user.profileImage || null,
    }

    return NextResponse.json({ success: true, user: safe })
  } catch (e) {
    console.error('GET /api/user/me error', e)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
