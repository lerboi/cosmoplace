"use client"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Navbar(){
    const [nav, setNav] = useState(false)
    const links = [
        {label: "Home", href: "/"},
        {label: "Bookings", href: "/bookings"},
        {label: "FAQ", href: "/faq"},
    ]
    const {data: session} = useSession()

    return(
        <>
        <div className="bg-slate-950 sticky h-[60px] z-50 items-center flex justify-between">
            <div id="logo" className="text-slate-100 ml-5 mt-2">
                <h1><Link href="/">CosmoPlace</Link></h1>
            </div>
            <div className="hidden md:block">
                <ul className="md:flex mt-2"> 
                    {links.map(link => {
                        return <li className="md:mx-8 hover:text-white text-lg transition-all delay-75" key={link.href}><Link href={link.href}>{link.label}</Link></li>
                    }
                    )}
                </ul>
                {session? 
                <div className="absolute right-0 top-0 p-3 mt-1">
                    <Button variant="secondary"><Link href="/api/auth/signin" onClick={() => signOut()}>Logout</Link></Button>
                </div>
                 : 
                <div className="absolute right-0 top-0 p-3">
                    <Button variant="secondary"><Link href="/api/auth/signin">Login</Link></Button>
                </div>
                 }   
            </div>
            <div className="text-white text-2xl mr-4 mt-2">
                <RxHamburgerMenu className="md:hidden hover:cursor-pointer" onClick={() => setNav(!nav)}/>
            </div>
        </div>
        <div className="bg-slate-950 transition-all ease-in-out delay-75 p-1">
        {nav && 
            (links.map(link => {
                    return (      
                        <Link className="ml-6 transition-all delay-[0.1s] text-xl hover:border-b-2 hover:border-slate-400 flex flex-col my-2" key={link.href} href={link.href} onClick={() => setNav(false)}>{link.label}</Link>
                    )
                })
            )} 
            {session? 
            <div className={`${nav? "" : "md:hidden hidden" }`}>
                <Link href="/signInPage" onClick={() => signOut()} className="ml-6 transition-all delay-[0.1s] text-xl hover:border-b-2 hover:border-slate-400 flex flex-col my-2">Logout</Link>
            </div>
            : 
            <button className={`${nav? "bg-slate-600 hover:bg-slate-500 ml-6 rounded px-3 my-1 transition-all delay-75" : "md:hidden hidden" }`}>
                <Link href="/signInPage" onClick={() => setNav(false)} className={`transition-all hover:text-slate-50 delay-[0.1s] text-xl flex flex-col my-2`}>Login</Link>
            </button> 
            }
        </div>
        
        </>
    )
}

