import React from 'react'
import Links from './links/Links'
import style from './navbar.module.css'
import logo from '@/media/logo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
          <div className='flex flex-row gap-2 items-center'>
          <Image src={logo} className='h-12 w-12 text-green-500'></Image>
            <div>LinkTree</div>
        </div>
        </div>
            <Links/>
        
    </div>
  )
}

export default Navbar