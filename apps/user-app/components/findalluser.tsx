"use server"
import React from 'react'
import prisma from '@repo/db/client'

export async function Findalluser(){
    const user = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            number: true
        }
    });
    return user;
}
