import LogoutButton from "@/components/navbar/links/LogoutButton";
import Link from "next/link";
import "@/app/globals.css";
import { headers } from "next/headers";
import ActiveLink from "@/components/navbar/activelink/ActiveLink";

export default function Homelayout({ children }) {
  const headerList = headers()
  console.log([headerList]);
  return (
    <>
      <div className="containerlayout">
        <div className="maincontent">
          <div className=" flex flex-row h-full gap-5 ">
            <div className="flex flex-col  w-1/5 pt-5 items-center mt-6 gap-5">
            <ActiveLink path="/admin" title={'admin'} key={"admin"} className=' w-8/10' />
            <ActiveLink path="/analytics" title={'analytics'} key={"analytics"}/>
              <LogoutButton />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
