import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import React from 'react'
import {Textarea} from "@nextui-org/react";

import save from "./save"
const Form = ({colour,imageurl,bgstate , userData}) => { 

  const saved=async(formdata)=>{
    const name =formdata.get("name")
    const location =formdata.get("location")
    const bio =formdata.get("bio")
    console.log(name , location , bio)
  
    if(!name | !location | !bio){
      console.log("Please submit all Fields")}
    else{
      const newdata={
         name,location,bio,colour,imageurl,bgstate
      }
      //console.log(newdata , "newuserData")
      save(newdata); 
    }}
  

  return (
    <form  action={saved} className="w-full items-center flex flex-col ">
        
        <div key={"name"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
          <Input type="text" name="name"  defaultValue={userData.name} label="Name"  />
        </div>
        <div key={"location"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
          <Input type="text" name="location"   defaultValue={userData.location}label="Location"/>
        </div>
        <div key={"bio"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
        <Textarea
          name="bio"
          key="bordered"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your Bio..."
          defaultValue={userData.bio}
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        </div>
        <div className="w-2/5 m-10">
        <Button color="primary" variant="ghost" className="w-full"  type="submit"  >
        Save
      </Button>
        </div>
    </form>
  )
}

export default Form