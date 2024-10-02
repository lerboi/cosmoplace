import { Button } from "@/components/ui/button";

export default function Card({room}){
    return(
        <>
        <div className="hover:scale-105 hover:cursor-pointer hover:shadow-sm hover:shadow-orange-400 transition-all delay-75 relative h-[300px] rounded-xl w-[230px] bg-white">
            
            <div className="grid grid-cols-2 absolute h-[30%] w-full rounded-b-xl bottom-0 bg-black bg-opacity-50">
                <div>
                    <h1>{room.name}</h1>
                </div>
                <div>
                    <p>{room.description}</p>
                </div>
            </div>
        </div>
        </>
    )
}