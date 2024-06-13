"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {Toaster, toast} from 'react-hot-toast';
import { useRouter } from 'next/navigation'
const Form =({userdata}) => {
  const router = useRouter()
const Handlesubmit = async (e) => {
 try {
    toast.loading("loading");
    const check = e.get("username");
    const data={
      email:userdata,
      username:check
    }
     
    const res= await axios.post(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/check` ,data)
    console.log(res);
    toast.dismiss();
    if(res.data.success){
      toast.success(res.data.message)
      router.push("/admin")
    }
    else{
      toast.error(res.data.message)
    }
    
 } catch (error) {
  console.log(error)   
  toast.error(error.message) 
 }
  };


  return (
    <>
     <Toaster/>
     <form
            className="flex flex-col items-center gap-8 mt-20"
            action={Handlesubmit}
          >
            <input
              type="text"
              name="username"
              placeholder="Link"
              className="p-3 text-black w-1/4 text-center "
            />
             <button
              className=" w-1/4 bg-emerald-600 px-5 p-3 text-black border-none select-none border-r-2 flex flex-row gap-2 justify-center"
              type="submit"
            >
              Claim Your link{" "}
              <FontAwesomeIcon
                className="w-6 h-6 items-center"
                icon={faHandPointer}
              />
            </button>
          </form>
    </>
  )
}

export default Form