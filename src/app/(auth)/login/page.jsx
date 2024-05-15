import GoogleProvider from '@/components/providers/GoogleProvider'
import Image from 'next/image'
import React from 'react'
import loginImg from '@/media/login.jpg'
const Login = () => {
  console.log(loginImg)
  return (
    <div className='flex flex-col md:flex-row items-center h-full'>
    <div className='h-full w-full hidden md:block'>
        <Image src={loginImg} className='h-screen w-full' placeholder="blur" alt='loginimg'/>
    </div>
      <div className='w-full flex flex-col items-center justify-center'>
      <GoogleProvider/>
      </div>
    </div>
  )
}
export default Login