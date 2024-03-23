import Username from "@/models/adminModel";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

const Authenticate=async()=>{
    const session =await getServerSession(authOption);
    // console.log(session);
    let id 
    let data 
    if (!id) {
      data = await Username.findOne({ email: session.user.email });
      if (!data) {
        redirect("/account");
      }
    }
    if (id) {
      data = await Username.findById(id);
      // console.log("Rendered", data);
      if (session.user.email != data.email) {
        redirect("/");
      }
    }
    if (!session) {
      redirect("/");
    }
}

export default Authenticate