import GoogleProvider from '@/components/providers/GoogleProvider'
import React from 'react'
const Login = () => {
  return (
    <div className='flex flex-col items-center gap-2 '>
      <div className='text-4xl font-bold my-10'>
        Sign In with Social Login
      </div>
      <GoogleProvider/>
    </div>
  )
}
export default Login