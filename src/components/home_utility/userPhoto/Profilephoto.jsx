"use server"
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/api/auth/[...nextauth]/route';
import Image from 'next/image';
const Profilephoto = async({width , height}) => {
    const session = await getServerSession(authOption);
  return (
    <div><Image src={session.user.image} width={width} height={height} className=" rounded-full" /></div>
  )
}
export default Profilephoto