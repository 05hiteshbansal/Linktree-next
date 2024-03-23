"use server"
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/api/auth/[...nextauth]/route';
import User from "@/models/adminModel"
export async function savelinks (data){
    const session = await getServerSession(authOption);
    console.log(session);
    //console.log(data);
    //  const y=await User.findOne({email:session.user.email});
    //  console.log(y);
    //  y.socialLinks=data;
     const finalList = await User.findOneAndUpdate({email:session.user.email} , {socialLinks:data})
     console.log(finalList)
}

// export async function getlinks (data){
//     const session = await getServerSession(authOption);
//     console.log(session);
//      const finalList = await User.findOneAndUpdate({email:session.user.email , socialLinks:data})
//      console.log(finalList)
// }