
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";
import styles from "./links.module.css";
import ActiveLink from "../activelink/ActiveLink";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import Button from "@/components/darkMode/Button"
const link = [
  { path: "/", title: "Home" },
 { path: "/contactus", title: "Contact Us" },
];




const Links = async() => {
  const session =await getServerSession(authOption)
  const isAuth = session

  return (
    <div>
    <div className={styles.links}>
    <Button/>
      {link.map((abs) => (
        <ActiveLink path={abs.path} title={abs.title} key={abs.path} />
      ))}
      {isAuth ? (
        <>
          <ActiveLink path="/admin" title={`Hi! ${session.user.name}`} key={"user"} />
          <LogoutButton width = {'100%'}/>
        </>
      ) : (
        <Link href='/login'>
        <button className={styles.auth}>Login</button>
        </Link>
      )}
    </div>
    
    </div>
  );
};

export default Links;
