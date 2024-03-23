import LogoutButton from "@/components/navbar/links/LogoutButton";
import Link from "next/link";
import "@/app/globals.css";
import { headers } from "next/headers";
import ActiveLink from "@/components/navbar/activelink/ActiveLink";
import Profilephoto from "@/components/home_utility/userPhoto/Profilephoto";

export default function Homelayout({ children }) {
  const headerList = headers()
  console.log([headerList]);
  return (
    <>
      <div className="containerlayout">
        <div className="maincontent">
          <div className=" flex flex-row min-h-full gap-5 bg-slate-50 ">
            <div className="flex flex-col  w-1/5 pt-5 items-center  gap-5 bg-slate-100 shadow-lg ">
            <Profilephoto width={150} height={150}/>
            <ActiveLink path="/admin" title={'admin'} key={"admin"}  />
            <ActiveLink path="/analytics" title={'analytics'} key={"analytics"} />
            <ActiveLink path="/addLinks" title={'Add Links'} key={"links"} />
              <LogoutButton />
            </div>
            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
