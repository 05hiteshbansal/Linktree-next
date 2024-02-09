"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Form = () => {
const {data}=useSession();
const router = useRouter();
const funsubmit=(e)=>{
    e.preventDefault();
   let preferedlink=e.target[0].value
if(preferedlink.length>0 && data){
router.push(`/account?link=${preferedlink}&free=true`);
}
else if(preferedlink.length>0){
    router.push('/login');
}
}


  return (
    <>
    <form className="flex flex-row items-center" onSubmit={funsubmit}>
  <span className='bg-white text-black py-3 ps-6'>linklist.to/</span>
  <input type="text" placeholder="username"  className='py-3 text-black focus:border-slate-50'/>
  <button className='bg-emerald-600 px-5 py-3 text-black border-none select-none' type='submit'>Sign in Free</button>
</form>
    </>
  ) 
}

export default Form