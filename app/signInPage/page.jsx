"use client"
import { useState } from "react"
import SignInCard from "../components/SigninCard"

export default function SignInPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="m-auto w-max h-max mt-16">
            <SignInCard email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        </div>
    )
}