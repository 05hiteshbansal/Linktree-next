"use client"
import { RWebShare } from "react-web-share";
export default function Share({url}) {
  return (
    <div className=" rounded-full bg-slate-300  w-10 h-10 flex items-center justify-center top-10 right-5 absolute cursor-pointer">      
    <RWebShare
            data={{
                text: "LinkTree",
                title: "LinkTree Shared Url",
                url: url,
            }}
        >
          <span className="material-symbols-outlined">share</span> 
        </RWebShare>
    </div>
  )
}