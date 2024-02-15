"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {signIn} from "next-auth/react"
import { faGoogle ,faGithub  } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { redirect } from 'next/navigation'

const googleFunc=()=>{
  signIn('google', { callbackUrl: '/' })
}
const githubFunc=()=>{
  signIn('github', { callbackUrl: '/' })
  
}

const GoogleProvider = () => {
  return (
    <>
    <button className='px-2 py-5 w-1/6 bg-red-600 text-white font-bold rounded-md flex items-center gap-2 justify-center ' onClick={googleFunc}><FontAwesomeIcon className='w-6 h-6 items-center' icon={faGoogle} /><div>Sign in Google</div></button>
      <button className='px-2 py-5 w-1/6 bg-black text-white font-bold rounded-md flex items-center gap-2 justify-center' onClick={githubFunc}><FontAwesomeIcon className='w-6 h-6 items-center' icon={faGithub} />Sign in GitHub</button>
    </>
  )
}

export default GoogleProvider