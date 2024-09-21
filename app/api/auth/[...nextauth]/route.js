import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {type:"text" ,label:"Email", placeholder:"Your Email"},
                password: {type:"password", label: "Password", placeholder:"Your Password"}
            },
            async authorize(credentials, req){
                let user = null

                //authorize logic

                user = {
                    email: "leroyzzng@gmail.com",
                    password: "123"
                }
                return user
            }
        }
    ) 
    ]
}

export const handler = NextAuth(authOptions)
const GET = handler
const POST = handler
export {GET, POST}