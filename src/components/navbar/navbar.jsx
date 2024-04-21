import React from 'react'
import Links from './links/Links'
import style from './navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
          <Link href='/'>
          <div className='flex flex-row gap-2 items-center'>
          {/* <Image src={logo} className='h-12 w-12 text-green-500' alt='Logo'></Image> */}
          <FontAwesomeIcon icon={faCannabis} className='h-12 w-12 text-green-500'/>
            <div>LinkTree</div>
        </div>
            </Link>
        </div>
            <Links/>
    </div>
  )
}

export default Navbar