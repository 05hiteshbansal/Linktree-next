import { getServerSession } from 'next-auth'
import mongoose from 'mongoose'
import React from 'react'
import { authOption } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer  } from '@fortawesome/free-solid-svg-icons'
import Username from '@/backend/models/models'
const Account = async(req) => {
const session =await getServerSession(authOption)
const desiredlink=req.searchParams.link
const Handlesubmit=async(e)=>{
  "use server"
  const check =e.get('username')

  //const found = await Username.find({username:check})
// if(found){
// console.log(found)
// }
// else{
  Username.create(check)
//}
}
if(!session){
    redirect('/')
}    
return (
    <>
    <div className='flex flex-col mt-20'>
        <div className='text-5xl font-bold'>Claim Your Free LinkTree !!!</div>
        <div>
        <form className="flex flex-col items-center  gap-8 mt-20" action={Handlesubmit}>
  <input type="text" name='username' placeholder="Link"  className='p-3 text-black w-1/4 text-center ' defaultValue={desiredlink} />
  <button className=' w-1/4 bg-emerald-600 px-5 p-3 text-black border-none select-none border-r-2 flex flex-row gap-2 justify-center' type='submit'>Claim Your link <FontAwesomeIcon className='w-6 h-6 items-center' icon={faHandPointer}/></button>
</form>
</div>
    </div>
    </>
  )
}

export default Account