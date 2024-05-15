import NextAuth from "next-auth"; 
import GoogleProvider from "next-auth/providers/google";  
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/adapter";
import User from "@/models/adminModel"
import connect from "@/backend/dbConnection/db";
export const authOption={
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
     GithubProvider({
     clientId: process.env.GITHUB_ID,
     clientSecret: process.env.GITHUB_SECRET,
   })
  ], 
  session: {
    strategy: "jwt"
  },
  
 callbacks: {
    async signIn({ user, account, profile}) {
      connect()
      console.log(user, account, profile)
      if(account.provider=="github"){
            try {
              const userfind= await User.findOne({email:user.email});
              if(!userfind){
                await User.create({email:user.email})
                
                await user.save();
                return true
              }
      return true

            } catch (error) {
              console.log("error" , error)
              return false;
            }
      }
     else if(account.provider=="google"){
        try {
          const userfind= await User.findOne({email:user.email});
          if(!userfind){
            await User.create({email:user.email})
            await user.save();
            return true
          }
      return true
        } catch (error) {
          console.log("error" , error)
          return false;
        }
  }
      
    }
  },
  adapter: MongoDBAdapter(clientPromise),
}

const handler = NextAuth(authOption);
  
export { handler as GET, handler as POST } 