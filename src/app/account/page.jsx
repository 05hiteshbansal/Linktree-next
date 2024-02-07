import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Form from "@/components/home_utility/usercheckForm/Form";
const Account = async (req) => {
  const session = await getServerSession(authOption);
  const desiredlink = req.searchParams.link;

  if (!session) {
    redirect("/");
  }
  return (
    <>
      <div className="flex flex-col mt-20">
        <div className="text-5xl font-bold">Claim Your Free LinkTree !!!</div>
        <div>
         <Form  desiredlink={desiredlink} />
        </div>
      </div>
    </>
  );
};

export default Account;
