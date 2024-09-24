import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

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
                return user
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