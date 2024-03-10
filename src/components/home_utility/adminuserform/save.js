"use server"
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/adminModel"

export default async function save(formdata){
    const session = await getServerSession(authOption);
    const email = session.user.email
    const userData = formdata
console.log(userData);
    const data = await User.findOne({email:email})
    const updatedData=await User.findByIdAndUpdate(data._id , userData)
     console.log( updatedData) 
    }