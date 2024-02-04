import { getServerSession } from 'next-auth'
import React from 'react'
import { authOption } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const Account = async(req) => {
const session =await getServerSession(authOption)
const desiredlink=req.searchParams.link
if(!session){
    redirect('/')
}
console.log(req ,session)    
return (
    <>
    <div className='flex flex-col justify-items-center'>
        <div className='text-5xl font-bold'>Claim Your Free LinkTree !!!</div>
        <div>
        <form className="flex flex-col items-center  gap-2">
  <input type="text" placeholder="Link"  className='p-3 text-black w-2/5 text-center ' defaultValue={desiredlink}/>
  <button className=' w-1/4 bg-emerald-600 px-5 p-3 text-black border-none select-none border-r-2' type='submit'>Claim Your link</button>
</form>
</div>
    </div>
    </>
  )
}

export default Account