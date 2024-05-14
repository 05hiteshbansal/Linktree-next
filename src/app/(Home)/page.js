"use client"
import Image from "next/image";
import photo from '@/media/photo.png'
import Form from "@/components/home_utility/homeForm/form";
export default function Home() {
 
  return (
    <>
    
    <div className="gap-9 my-20 flex flex-col lg:flex-row items-center justify-center ">
      <div>
      <div className='flex-col flex gap-3 mb-8 max-w-lg mt-8'>
      <h1 className='text-5xl font-bold'> Get Pesonlized Link for Everything</h1>
        <p className='text-2xl'>A one webpage solution to all Social and Proffesional links at one place </p> 
      </div>
            <Form/>
      </div>
<Image src={photo} width={500} height={200} alt="homeimg"></Image>
      
</div>
    </>
  )
}
