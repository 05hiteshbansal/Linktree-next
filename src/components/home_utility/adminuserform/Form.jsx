import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import React from 'react'
import {Textarea} from "@nextui-org/react";
const Form = () => {
  return (
    <form className="w-full items-center flex flex-col ">
        
        <div key={"name"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
          <Input type="text" label="Name"  />
        </div>
        <div key={"location"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
          <Input type="text" label="Location"/>
        </div>
        <div key={"bio"} className="flex w-full flex-wrap md:flex-nowrap mb-full p-3">
        <Textarea
          key="bordered"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Enter your Bio..."
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
        </div>
        <div className="w-2/5 m-10">
        <Button color="primary" variant="ghost" className="w-full">
        Save
      </Button>
        </div>
    </form>
  )
}

export default Form