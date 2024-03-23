import Image from 'next/image'
import React from 'react'
import loader from "@/media/loading.gif"
const Loading = () => {
  return (
    <>
    <div className='flex min-w-screen min-h-screen m-auto '>
    <div>
      <Image src={loader} width={500} height={500}></Image>
    </div>
    </div>
    </>
  )
}

export default Loading