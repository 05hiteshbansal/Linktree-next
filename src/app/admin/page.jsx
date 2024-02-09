import React from 'react'
import Username  from '@/backend/models/models' 
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOption } from '../api/auth/[...nextauth]/route';

const Admin = async(req) => {
const session = await getServerSession(authOption);
  const id = req.searchParams.id;
const data = await Username.findById(id) 
if(!session || session.user.email !== data.email){
redirect('/');  
}

  return (
    <div>{data.username}</div>
  )
}

export default Admin