"use client"
import React, { useState } from 'react'
import ToggleButton from './togglebutton/togglebutton'
import Image from 'next/image'
import Form from '@/components/home_utility/adminuserform/Form'
const Toggle = ({image}) => {
    const [bgimage , setbgimage] = useState("colour");
    // const user = localStorage.getItem("user");
    console.log(bgimage , "image")
  return (

    <div className='flex flex-col items-center bg-slate-50'>
    <div className=' w-2/3 h-52 bg-slate-400 flex flex-col items-center justify-evenly py-4 mix-blend-normal mix-blend-mode: normal'>
        <div>image</div>
        <div>
<ToggleButton setimagetoggler={setbgimage} imagetoggler={bgimage}/>
        </div>
    </div>
    <div>
    <Image className='rounded-full shadow-lg relative bottom-10 border-neutral-50 border-solid border-8' src={image} width={150} height={150}  ></Image>
    </div>
    <div className='w-3/5 bg-white rounded-lg'>
        <Form/>
    </div>
    </div>
  )
}

export default Toggle