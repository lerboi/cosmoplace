
export default function BookingInput(){
    return (
        <div className="">
            <div className='w-[550px] grid grid-cols-4 px-3 rounded-xl bg-slate-200 text-slate-800'>
                <div className="border-r-2 py-6 h-full border-slate-400">
                    <h1>rooms</h1>
                </div>
                <div className="ml-2 flex items-center border-r-2 border-slate-400">
                    <h1>Calender</h1>
                </div>
                <div className="col-span-2 flex items-center justify-around">
                    <h1>Button</h1>
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}