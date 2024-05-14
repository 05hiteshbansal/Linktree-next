
//import React, { useState } from 'react'
import Links from './links/Links'
import style from './navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
     <div className=" flex flex-col md:flex-row bg-inherit justify-between items-center px-5 py-5 pt-1" >
        <div className={style.logo}>
          <Link href='/'>
          <div className='flex flex-row gap-2 items-center'>
          {/* <Image src={logo} className='h-12 w-12 text-green-500' alt='Logo'></Image> */}
          <FontAwesomeIcon icon={faCannabis} className='h-12 w-12 text-green-500'/>
            <div>LinkTree</div>
        </div>
            </Link>
        </div>
        {/* {
(control)?
        } */}
        <Links/>
    </div>
  )
}

export default Navbar