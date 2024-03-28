"use client";
import React from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
//import { CldUploadButton } from 'next-cloudinary';
//import { CldUploadWidget } from 'next-cloudinary';
//import uppath from "@/app/api/upload/route"
import fileupload from "./fileupload";
export default function ToggleButton({
  setimagetoggler,
  imagetoggler,
  colorchange,
  imagechange,
  userData,
}) {
  const upload = async (e) => {
    console.log(e);
    const dataupload = await fileupload(e);
    console.log(dataupload);
    imagechange(dataupload);
  };

  return (
    <div className="flex flex-wrap flex-col items-center ">
      <Tabs
        key="lg"
        size="lg"
        aria-label="Tabs sizes"
        variant="solid"
        selectedKey={imagetoggler}
        onSelectionChange={setimagetoggler}
        data-selected={imagetoggler}
      >
        <Tab key="colour" title="Colour">
          <div className=" flex flex-row items-center justify-center px-2 gap-1 rounded-md bg-slate-200">
            <div className=" font-normal"> Background Color :</div>
            <Input
              type="color"
              name="changedcolor"
              onValueChange={colorchange}
              className="w-10"
              defaultValue={userData.colour}
            ></Input>
          </div>
        </Tab>
        <Tab key="Image" title="Image">
          <div className=" flex flex-row items-center justify-center px-2 gap-1 rounded-md bg-slate-200">
            <div className="file-input">
              <input
                type="file"
                id="file"
                accept="image/*"
                className=" hidden"
                onChange={upload}
              />
              <label htmlFor="file" className="cursor-pointer">
                Select Image
              </label>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
