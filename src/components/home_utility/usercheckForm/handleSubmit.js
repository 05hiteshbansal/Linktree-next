import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Username from "@/backend/models/models.js";
import { redirect } from 'next/navigation';

const session = await getServerSession(authOption);
const  Handlesubmit = async(e) => {
  "use server";
    const check = e.get("username");

    const found = await Username.findOne({ username: check });

    if (found) {
      console.log(JSON.stringify(found))
      return redirect('/account?usernameTaken=1');
      
    } else {
     const data = await Username.create({ username: check , email:session.user.email });
     console.log(data);
    return redirect(`/admin?id=${data._id}`);
    }


  }

export default Handlesubmit