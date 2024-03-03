import React from "react";
import Username from "@/backend/models/models";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "../../api/auth/[...nextauth]/route";
import Profilephoto from "@/components/home_utility/userPhoto/Profilephoto";
import Toggle from "@/components/dashboard/profile/toggle";

const Admin = async (req) => {
  const session = await getServerSession(authOption);
  console.log(session);
  let id = req.searchParams.id;
  let data;
  if (!id) {
    data = await Username.findOne({ email: session.user.email });
    if (!data) {
      redirect("/account");
    }
  }
  if (id) {
    data = await Username.findById(id);
    console.log("Rendered", data);
    if (session.user.email != data.email) {
      redirect("/");
    }
  }
  if (!session) {
    redirect("/");
  }

  console.log(data);
  return (
    <>
    <div className="flex flex-col items-center p-7 bg-slate-50 ">
      <div className="flex flex-col items-center w-full  ">
        <div className="w-full">
          <Toggle  image={session.user.image}/>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Admin;