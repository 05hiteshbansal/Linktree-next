import Image from 'next/image'
import React from 'react'
import loader from "@/media/loading.gif"
const Loading = () => {
  return (
    <>
    <div className='flex justify-start items-center'>
      <Image src={loader} width={500} height={500}></Image>
    </div>
    </>
  )
}

export default Loading