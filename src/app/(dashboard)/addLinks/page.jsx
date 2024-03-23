import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MainForm from "@/components/home_utility/LinkForms/mainForm"
import User from "@/models/adminModel"
const page = async() => {
  const session = await getServerSession(authOption);
  if (!session) {
    redirect("/");
  }

  const user = await User.findOne({email:session.user.email})
  return (
    <>
      <MainForm linklist={user.socialLinks}/>
    </>
  );
};

export default page;