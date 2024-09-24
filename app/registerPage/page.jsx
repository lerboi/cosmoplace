"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import RegisterCard from "../components/RegisterCard"

export default function RegisterPage(){
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("") 

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const response = await fetch("/api/registerUserAPI", {
                method: "POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            if(response.ok){
                router.push("/signInPage")
            } else(
                setError(response.error)
            )
        }
        catch (err){
            setError(err)
        }
    }

    return(
        <form className="flex justify-center items-center mt-16" onSubmit={handleSubmit}>
            <RegisterCard email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error}/>
        </form>
    )
}