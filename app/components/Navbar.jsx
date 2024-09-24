"use client"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar(){
    const [nav, setNav] = useState(false)
    const links = [
        {label: "Home", href: "/"},
        {label: "Bookings", href: "/bookings"},
        {label: "FAQ", href: "/faq"},
    ]

    return(
        <>
        <div className="bg-slate-950 sticky h-[60px] z-50 items-center flex justify-between">
            <div id="logo" className="text-slate-100 ml-5">
                <h1><Link href="/">CosmoPlace</Link></h1>
            </div>
            <div className="hidden md:block">
                <ul className="md:flex"> 
                    {links.map(link => {
                        return <li className="md:mx-8 hover:text-white transition-all delay-75" key={link.href}><Link href={link.href}>{link.label}</Link></li>
                    }
                    )}
                </ul>
                <div className="absolute right-0 top-0 p-3">
                    <Button><Link href="/api/auth/signin">Sign in</Link></Button>
                </div>
            </div>
            <div className="text-white text-2xl mr-4">
                <RxHamburgerMenu className="md:hidden" onClick={() => setNav(!nav)}/>
            </div>
        </div>
        <div className="transition-all ease-in-out delay-75">
            {nav && (
                <div className="bg-slate-950 absolute p-2 w-full">
                    {links.map(link => {
                        return <Link className="ml-6 transition-all delay-[0.1s] text-xl hover:border-b-2 hover:border-slate-400 flex flex-col my-2" key={link.href} href={link.href} onClick={() => setNav(false)}>{link.label}</Link>
                    }
                    )}
                    <div className="md:hidden">
                        <Link href="/signInPage" onClick={() => setNav(false)} className="ml-6 transition-all delay-[0.1s] text-xl hover:border-b-2 hover:border-slate-400 flex flex-col my-2">Sign In</Link>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}