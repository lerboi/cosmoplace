import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcrypt"

export async function POST(req){
    const data = await req.json()
    const {email, password} = data
    
    const existingUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(!existingUser) {
        const hashedPass = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hashedPass
            }
        })
        return NextResponse.json({status: 200}, newUser)
    } else {
        NextResponse.json({error: "User with that Email already exists"}, {status: 400})
    }

    return NextResponse.json({error: "Something went wrong"}, {status: 400})
}