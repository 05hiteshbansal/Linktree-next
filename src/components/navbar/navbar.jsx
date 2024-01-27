import React from 'react'
import Links from './links/Links'
import style from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.container}>
        <div className={style.logo}>
            logo
        </div>
            <Links/>
        
    </div>
  )
}

export default Navbar