"use client"
import { Button } from "@/components/ui/button";
import { CarouselSize } from "./components/Carousel-Home";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Card from "./components/Card";

export default function Home(){
  const {data: session, status} = useSession()
  const [roomTypes, setRoomTypes] = useState(null)

  //fetch-create roomTypes
  useEffect(() => {
    async function getRoomTypes(){
      const response = await fetch("/api/getRoomTypesAPI", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      if(response.ok){
        const rooms = await response.json()
        console.log("Rooms Retreived")
        setRoomTypes(rooms)
      }
      else {
        console.log("Unable to get roomTypes")
        setRoomTypes(null)
      }
    }
    getRoomTypes()
  }, [session, status])

  if(status === "loading"){
    return(
      <p>Loading</p>
    )
  }

  return(
    <>
    <div className="z-[-1] flex flex-col bg-[url('/bg2.png')] bg-cover items-center justify-center h-[400px]">
      <h1 className="text-4xl font-semibold whitespace-nowrap">Exclusive Private Entertainment</h1>
      <p className="my-3">Perfect for Dates and Gatherings</p>
      <Button variant="outline">Make a Booking</Button>
    </div>

    <div className="md:block hidden ml-6 mt-5 text-2xl font-semibold">
      <h1>Choose your Room</h1>
    </div>
    <div className="hidden m-auto md:max-w-[900px] py-8 md:grid md:grid-cols-3 md:gap-2 px-2">
      <div className="relative inset-0 m-auto">
        {roomTypes && (
          <div className="flex gap-16">
            {roomTypes.map(room => (
              <Card key={room.id} room={room}/>
            ))}
          </div>
        )}
      </div>
    </div>

    <div className="p-20 md:hidden">
      <CarouselSize roomTypes={roomTypes}/>
    </div>
    </>
  )
}