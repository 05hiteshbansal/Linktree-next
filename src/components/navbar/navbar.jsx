import React from 'react'
import Links from './links/Links'
import style from './navbar.module.css'
import logo from '@/media/logo.png'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
          <Link href='/'>
          <div className='flex flex-row gap-2 items-center'>
          <Image src={logo} className='h-12 w-12 fill-green-500' alt='Logo'></Image>
            <div>LinkTree</div>
        </div>
            </Link>
        </div>
            <Links/>
    </div>
  )
}

export default Navbar