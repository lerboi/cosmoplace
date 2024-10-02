'use client'

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize({roomTypes}) {

  return (
    (<div className="w-full max-w-3xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full">
        <CarouselContent>
          {roomTypes.map((room) => (
            <CarouselItem key={room.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0 aspect-square relative">
                    <Image src="/bg1.png" alt={room.name} layout="fill" objectFit="cover" />
                    <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-black bg-opacity-50 p-4 flex items-center justify-between">
                      <div>
                        <p className="text-white text-xl flex-grow mr-2 font-semibold">{room.name}</p>
                        <p className="text-white text-sm flex-grow mr-2">{room.description}</p>
                      </div>
                      <Button variant="secondary">Book now</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>)
  );
}