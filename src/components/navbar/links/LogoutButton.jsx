"use client"
import React from 'react'
import { signOut} from "next-auth/react"
import styles from "./links.module.css";
const LogoutButton = () => {
  return (
    <button className={styles.auth} onClick={()=>signOut()}>Logout</button>
  )
}

export default LogoutButton