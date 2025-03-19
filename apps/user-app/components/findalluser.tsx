"use server"
import React from 'react'
import prisma from '@repo/db/client'

export async function Findalluser(){
    const user=await prisma.user.findMany();
    return user;
}