"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "./Activelink.module.css"
const ActiveLink = (abs) => {
    const currentPath=usePathname();
  return (
    <div className='w-full h-hull flex justify-center items-center text-center'>
    <Link href={abs.path} className={` flex justify-center items-center w-full m-2 ${currentPath==abs.path && currentPath!='/' && styles.activelinks}`}  >
          {abs.title}
    </Link>
    </div>
  )
}

export default ActiveLink