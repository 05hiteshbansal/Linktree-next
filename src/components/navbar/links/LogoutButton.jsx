"use client"
import React from 'react'
import { signOut} from "next-auth/react"
import styles from "./links.module.css";
const LogoutButton = ({width}) => {

const logoutFunc=()=>{
  signOut({ callbackUrl: '/' });
}

  return (
    <button className={styles.auth +` ${width}`} onClick={logoutFunc}>Logout</button>
  )
}

export default LogoutButton