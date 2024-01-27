"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import ActiveLink from "../activelink/ActiveLink";

const link = [
  { path: "/", title: "Home" },

  { path: "/Priceing", title: "Priceing" },

  { path: "/contactus", title: "Contact Us" },
];

const Links = () => {
  const isAuth = true;
  const isAdmin = true;

  const [open, setOpen] = useState(true);

  return (
    <div>
    <div className={styles.links}>
      {link.map((abs) => (
        <ActiveLink path={abs.path} title={abs.title} key={abs.path} />
      ))}
      {isAuth ? (
        <>
          {isAdmin && (
            <ActiveLink path="/admin" title={"Admin"} key={"Admin"} />
          )}
          <button className={styles.auth}>Logout</button>
        </>
      ) : (
        <button className={styles.auth}>Login</button>
      )}
    </div>
    
    </div>
  );
};

export default Links;
