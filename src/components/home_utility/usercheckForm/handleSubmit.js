import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Username from "@/models/adminModel";
import { redirect } from "next/navigation";

const session = await getServerSession(authOption);
const Handlesubmit = async (e) => {
  "use server";
  const check = e.get("username");
  console.log(check, "ooo"); 
  const found = await Username.findOne({ username: check });
  console.log(found);

  if (found) {
    return redirect("/account");
  } else {
    const data = await Username.save({
      username: check,
    });
    console.log(data);
     redirect(`/admin?id=${data._id}`);
  }
};

export default Handlesubmit;
