"use client";
import React, { useState } from "react";
import ToggleButton from "./togglebutton/togglebutton";
import Image from "next/image";
import Form from "@/components/home_utility/adminuserform/Form";
const Toggle = ({ profileimage , userData }) => {
 // console.log(userData)
  const [bgimage, setbgimage] = useState(userData.bgstate);
  const [color, setcolor] = useState(userData.colour);
  const [image, setimage] = useState('https://images.pexels.com/photos/20410779/pexels-photo-20410779/free-photo-of-a-wooden-walkway-in-the-middle-of-a-jungle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  // const user = localStorage.getItem("user");
 // console.log(bgimage, "image");
  return (
    <div className="flex flex-col items-center bg-slate-50">
      <div className=" w-2/3 h-52 flex flex-col items-center justify-evenly py-4 mix-blend-normal mix-blend-mode: normal" style={bgimage=="colour" ?{backgroundColor:color} : {backgroundImage:`url(${image})` , textAlign:'center'}}>
        <div>
          <ToggleButton setimagetoggler={setbgimage} imagetoggler={bgimage} colorchange={setcolor} imagechange={setimage} userData={userData}/>
        </div>
      </div>
      <div>
        <Image
          className="rounded-full shadow-lg relative bottom-10 border-neutral-50 border-solid border-8"
          src={profileimage}
          width={150}
          height={150}
        ></Image>
      </div>
      <div className="w-3/5 bg-white rounded-lg">
        <Form colour={color} imageurl={"imageurl"} userData={userData}  bgstate={bgimage}/>
      </div>
    </div>
  );
};

export default Toggle;
