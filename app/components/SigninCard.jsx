"use client"
import { BiSolidUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import Link from "next/link";


export default function SignInCard({email, password, setEmail, setPassword, error}){
    return(
        <div className="text-slate-800 gap-2 bg-slate-200 p-6 w-[400px] h-[500px] rounded-xl grid grid-rows-6">
                <div className="row-span-1 p-3">
                    <h1 className="text-2xl font-semibold">Welcome Back</h1>
                </div>
                <div className="row-span-3">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex justify-center relative">
                            <div className="absolute text-2xl left-0 m-3 opacity-80">
                                <BiSolidUser />
                            </div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-slate-400 flex-shrink-0 placeholder-slate-100 rounded-xl p-3 w-[300px] focus:outline-none pl-11 text-slate-100"/>
                        </div>
                        <div className="flex justify-center flex-col relative">
                            <div className="absolute text-2xl left-0 m-3 opacity-80">
                                <FaLock />
                            </div>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="bg-slate-400 placeholder-slate-100 rounded-xl p-3 w-[300px] focus:outline-none pl-11 text-slate-200"/>
                            <div className="relative">
                                <p className="text-xs absolute right-0 m-1 opacity-65 hover:opacity-95 hover:cursor-pointer">Forgot Password?</p>
                            </div>
                        </div>
                        <div className={`flex flex-col justify-center items-center ${error? "mt-0" : "mt-3" }`}>
                            {error && (
                                <div className="mb-1">
                                    <p className="text-sm text-red-600">{error}</p>
                                </div>
                            )}
                            <button className="w-[200px] bg-slate-900 text-slate-200 rounded-xl py-3 hover:bg-slate-950 hover:text-slate-100 transition-all ease-in-out delay-[0.3s]">Login</button>
                            <p className="text-sm mt-2 underline hover:text-slate-950"><Link href="/registerPage">Create an account</Link></p>
                        </div>
                    </div>
                </div>
            <div className="row-span-2 mt-7">
                <div className="relative w-90% bg-slate-700 h-[2px] rounded"></div>
                <div className="flex justify-center">
                    <p className="">Or continue with Google?</p>
                </div>
            </div>
        </div>
    )
}