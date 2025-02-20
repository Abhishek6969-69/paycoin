import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
// import prisma from '@/lib/prisma';  // Adjust this import based on your prisma client location
import prisma from "@repo/db/client";
export async function PUT(request: Request) {
    try {
        const session = await getServerSession();
        if (!session?.user?.email) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { name, profileImage } = await request.json();

        const updatedUser = await prisma.user.update({
            where: { email: session.user.email },
            data: {
                name,
                profileImage,
            },
        });

        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json(
            { error: 'Failed to update user' },
            { status: 500 }
        );
    }
} 