"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "./Activelink.module.css"
const ActiveLink = (abs) => {
    const currentPath=usePathname();
  return (
    <Link href={abs.path} className={` ${styles.links} ${currentPath==abs.path && currentPath!='/' && styles.activelinks}`}  >
          {abs.title}
    </Link>
  )
}

export default ActiveLink