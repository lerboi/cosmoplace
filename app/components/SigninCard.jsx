"use client"

export default function SignInCard({email, password, setEmail, setPassword}){
    return(
        <div className="text-slate-800 gap-2 bg-slate-200 p-6 w-[400px] h-[500px] rounded-xl grid grid-rows-6">
            <div className="row-span-1">
                <h1 className="text-2xl">Welcome Back</h1>
            </div>
            <div className="row-span-3">
                <div className="flex justify-center">
                    <input placeholder="Email" className="bg-slate-400 placeholder-slate-100 rounded p-2 w-[80%]"/>
                </div>
            </div>
            <div className="row-span-2">
                <div className="relative w-90% bg-slate-700 h-[2px] rounded"></div>
                <div className="flex justify-center">
                    <p className="">Or continue with Google?</p>
                </div>
            </div>
        </div>
    )
}