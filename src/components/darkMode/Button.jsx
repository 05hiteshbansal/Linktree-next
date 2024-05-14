"use client"
import React, { useEffect, useState } from "react";
import {Switch} from "@nextui-org/react";
import {Moon} from "./Moon";
import {Sun} from "./Sun";

export default function Button() {
  const [dark,setDark]= useState(false);
  const adddark=()=>{
    let newd=!dark;
    console.log(newd , "Newd")
    setDark(newd);
    console.log(dark,"changed")
    localStorage.setItem("DarkMode", newd.toString());
  }
  useEffect(()=>{
    let getdark=localStorage.getItem("DarkMode");
    console.log(getdark,"getdark")
    if(getdark==="true"){
      console.log(1);
      document.documentElement.classList.add("dark1")
    }
    else{
      console.log(2)
      document.documentElement.classList.remove("dark1")
    }
},[dark])


useEffect(()=>{
  console.log("PPPP")
  localStorage.setItem("DarkMode", dark.toString());
},[])
  return (
    <Switch
      defaultSelected={<Sun/>}
      onChange={adddark}
      size="lg"
      color="success"
      startContent={<Sun />}
      endContent={<Moon />}
    >
    </Switch>
  );
}