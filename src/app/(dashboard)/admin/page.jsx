import React from 'react'
import Username  from '@/backend/models/models' 
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOption } from '../../api/auth/[...nextauth]/route';
import Image from 'next/image';
const Admin = async(req) => {
const session = await getServerSession(authOption);
console.log(session)
  let id = req.searchParams.id;
  let data;
  if(!id){
   data= await Username.findOne({email:session.user.email})
   if(!data){
    redirect('/account');
   }
  }
  if(id){
     data = await Username.findById(id) 
    console.log("Rendered" , data);
    if( session.user.email != data.email){
    redirect('/');  
    }
  }
  if(!session){
    redirect('/');  
    }

console.log(data);
  return (
    <>
    <div>{data.username}</div>
    <div >
<Image src={session.user.image} width={150} height={150} className=" rounded-full" />
<div>
<input placeholder='Enter Your Name'></input>
<input placeholder='Enter Your Name'></input>
<input placeholder='Enter Your Name'></input>
</div>
    </div>
    </>
  )
}

export default Admin