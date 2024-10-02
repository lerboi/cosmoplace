import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(){

    const roomTypes = await prisma.roomType.findMany()

    if(roomTypes.length >= 1){
        return NextResponse.json(roomTypes, {status: 201})
    }

    //hardcoded data for testing
    if(roomTypes.length === 0){
        const newRoomTypes = await prisma.roomType.createMany({
            data: [
                {name: "Private", description: "Perfect for Two", price: 10.00},
                {name: "Deluxe", description: "Enough for 4", price: 20.00},
                {name: "CosmoVIP", description: "LIke a VIP", price: 30.00},
            ]
        })
        const privateRoomId = newRoomTypes.find(room => room.name === "Private").id
        const deluxeRoomId = newRoomTypes.find(room => room.name === "Deluxe").id
        const vipRoomId = newRoomTypes.find(room => room.name === "CosmoVIP").id
        
        const newRooms = await prisma.room.createMany({
            data: [
                {name: "Private Room 1", roomTypeId: privateRoomId},
                {name: "Private Room 2", roomTypeId: privateRoomId},
                {name: "Private Room 3", roomTypeId: privateRoomId},
                {name: "Deluxe Room 1", roomTypeId: deluxeRoomId},
                {name: "Deluxe Room 2", roomTypeId: deluxeRoomId},
                {name: "VIP Room 1", roomTypeId: vipRoomId},
            ]
        })
        return NextResponse.json({message: "Created new Roomtypes/Rooms"}, {status: 401})
    }
    }
