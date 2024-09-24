import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import prisma from "@/lib/db";

const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type:"password"}
            },
            async authorize(credentials){
                let user = null
                //authorize logic
                try{
                    const hashedPass = await bcrypt.hash(credentials.password, 10)
                    const checkUser = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        }
                    })
                    if(checkUser){ 
                        const checkPass = await bcrypt.compare(credentials.password, checkUser.password)
                        if(checkPass){
                            user = {
                                email: credentials.email
                            }
                            return user
                        }
                        else {
                            throw new Error("Invalid credentials")
                        }

                    } else {
                        throw new Error("Account does not exist")
                    }
                } 
                catch(err){
                    throw new Error(err)
                }
                
            }
        })
    ],
    pages: {
        signIn: "/signInPage"
    }
}

const handler = NextAuth(authOptions)
const GET = handler
const POST = handler
export { GET, POST }