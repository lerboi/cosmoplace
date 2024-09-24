"use client"
import { BiSolidUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import Link from "next/link";

export default function RegisterCard({email, password, setEmail, setPassword, error}){
    return(
        <div className="text-slate-800 gap-2 bg-slate-200 p-6 w-[400px] h-[400px] rounded-xl grid grid-rows-5">
                <div className="row-span-1 p-2">
                    <h1 className="text-2xl font-semibold">Create an account</h1>
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
                        </div>
                        <div className="mt-3 flex flex-col justify-center items-center">
                            {error && (
                                <div>
                                    <p>{error}</p>
                                </div>
                            )}
                            <button className="w-[200px] bg-slate-900 text-slate-200 rounded-xl py-3 hover:bg-slate-950 hover:text-slate-100 transition-all ease-in-out delay-[0.3s]">Register</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}