"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import Form from "@/components/home_utility/LinkForms/Form";
import { ReactSortable } from "react-sortablejs";
import {savelinks } from '@/components/dashboard/savelinks/savelinks'

const Page = ({linklist}) => {
  const [links, setlinks] = useState(linklist);
  // const [newdata, setnewdata] = useState({});
  //Authenticate(req)
  const increase = () => {
    setlinks(prev => {
      return [...prev, {
        key: Date.now().toString(),
        title:'',
        link:'',
      }];
    });
  };
  // console.log(y);
  return (
    <div>
       <div>
        <div className=" flex flex-row justify-between py-4">
          <div>Add Links to Share</div>
          <div>
            <Button onClick={increase}>Add Link</Button>
          </div>
        </div>
        <div className="w-full">
        <ReactSortable list={links} setList={setlinks}>
          {links.map((data, index) => (
           // console.log(data, index)
               <div key={index}>
                <Form data={data} setlinks={setlinks}/>
                </div> 
          ))}
        </ReactSortable>
          <Button
                color="primary"
                variant="ghost"
                className="w-1/5"
                onClick={()=>savelinks(links)}
            >
                Save order
              </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
