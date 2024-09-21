import { Button } from "@/components/ui/button";
import Card from "./components/Card";
import { CarouselSize } from "./components/Carousel-Home";

export default function Home(){
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
    <div className="hidden m-auto md:max-w-[900px] py-8 md:grid md:grid-cols-3 md:gap-2">
      <div className="relative inset-0 m-auto">
        <Card />
      </div>
      <div className="relative inset-0 m-auto">
        <Card />
      </div>
      <div className="relative inset-0 m-auto">
        <Card />
      </div>
    </div>

    <div className="p-20 md:hidden">
      <CarouselSize/>
    </div>
    </>
  )
}