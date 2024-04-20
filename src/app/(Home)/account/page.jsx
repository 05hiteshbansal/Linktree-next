"use server"
import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Form from "@/components/home_utility/usercheckForm/Form";
import User from "@/models/adminModel"
import connect from "@/backend/dbConnection/db";
const Account = async() => {
 await connect()
  const session = await getServerSession(authOption);
  console.log(session, 3333)
  const user = await User.findOne({email:session.user.email})
  console.log(user)
   if(user.username)
  {
    redirect("/admin");
  } 
  // console.log(desiredlink)
  if (!session) 
  {
    redirect("/");
  }
  return (
    <>
      <div className="flex flex-col mt-20">
        <div className="text-5xl font-bold">Claim Your Free LinkTree !!!</div>
        <div>
         <Form userdata={user.email}/>
        </div>
      </div>
    </>
  );
};

export default Account;
