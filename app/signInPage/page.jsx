"use client"
import { useState } from "react"
import SignInCard from "../components/SigninCard"
import { signIn } from "next-auth/react"

export default function SignInPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(e){
        e.preventDefault()

        try{
            const response = await signIn("credentials", {
                redirect: false,
                email,
                password
            })
            if(response.error){
                setError(response.error)
            } else{
                window.location.href = "/"
            }
        }
        catch(err){

        }
    }

    return(
        <form className="m-auto w-max h-max mt-16" onSubmit={handleSubmit}>
            <SignInCard email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error}/>
        </form>
    )
}