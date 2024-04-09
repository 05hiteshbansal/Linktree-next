"use server"
import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Form from "@/components/home_utility/usercheckForm/Form";
import User from "@/models/adminModel"
const Account = async({searchParams}) => {
  const session = await getServerSession(authOption);
  const user = await User.findOne({email:session.user.email})
 console.log(user)
   if(user.username)
  {
    redirect("/admin");
  }
  const desiredlink = searchParams.link;
  const usernameTaken = searchParams.usernameTaken
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
         <Form  desiredlink={desiredlink} />
         {usernameTaken && (<>
         <div className="text-md text-red-500" > * Username already taken</div>
         </>)}
        </div>
      </div>
    </>
  );
};

export default Account;
