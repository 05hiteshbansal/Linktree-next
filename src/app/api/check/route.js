import connection from "@/backend/dbConnection/db";
import User from "@/models/adminModel";
import { NextResponse } from "next/server";
connection();

export async function POST(req) {
  // if (req.method === "POST") {
  try {
    const {username,email}= await req.json();
    //console.log(username,email);
    const user = await User.findOne({email:email});
    //console.log(user)
    if(user.username){
        return NextResponse.json({ message: "user has username", status: 400 ,success:false});
    }
    const findid=await User.findOne({username:username})
    if(findid){
        return NextResponse.json({ message: "Username already Taken", status: 400 ,success:false});
    }
    else{
        user.username=username
       const userinfo= await user.save();
    }
    return NextResponse.json({ message: "Username created successfully", status: 400 ,success:true});
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 ,success:false});
  }
}