import { useParams } from "next/navigation";

export default function bookingPage(){
    const {roomId} = useParams()
    console.log(roomId)

    return(
        <div>
            <h1>Booking</h1>
        </div>
    )
}