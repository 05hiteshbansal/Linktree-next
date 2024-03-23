import { Button } from "@nextui-org/react";
import React from "react";
import { Input } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons' 
const Form = ({data , setlinks}) => {
    //console.log(data)

    function handleLinkChange(keyOfLinkToChange, prop, ev) {
      console.log(keyOfLinkToChange)
      setlinks(prev => {
        const newLinks = [...prev];
        newLinks.forEach((link) => {
          if (link.key === keyOfLinkToChange) {
            link[prop] = ev.target.value;
          }
        });
        return [...prev];
      })
    }

    function removeLink(linkKeyToRemove) {
      console.log(linkKeyToRemove)
      setlinks(prevLinks => [...prevLinks].filter(l => l.key !== linkKeyToRemove));
    }

  return (
    <div className="w-full ">
      <div className="w-full my-5 ">
        <form className="w-full items-center flex flex-col  md:flex-row  bg-white rounded-md">
        <div className=" w-full flex items-center m-2">
        <FontAwesomeIcon icon={faGripLines} />
          <div className="w-full">
            <div
              key={"title"}
              className="flex w-full flex-wrap md:flex-nowrap mb-full p-3"
            >
              <Input 
              onChange={event => handleLinkChange(data.key, 'title', event)}
              type="text" 
              name="title" 
              label="Title" 
              defaultValue={data.title} />
            </div>
            <div
              className="flex w-full flex-wrap md:flex-nowrap mb-full p-3"
            >
              <Input 
              type="text" 
              name="Link" 
              label="Enter Links"
              defaultValue={data.link} 
              onChange={event => handleLinkChange(data.key, 'link', event)} 
              />
            </div>

          </div>
          </div>
          <div className="w-1/5 m-10 flex flex-col gap-4 ">
            <div className="w-4/5">
              <Button
                color="danger"
                variant="ghost"
                className="w-full"
                onClick={()=> removeLink(data.key)}
              >
                Remove
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
