import LogoutButton from "@/components/navbar/links/LogoutButton";
import Link from "next/link";
import "@/app/globals.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ActiveLink from "@/components/navbar/activelink/ActiveLink";
import Profilephoto from "@/components/home_utility/userPhoto/Profilephoto";
import { authOption } from "../api/auth/[...nextauth]/route";
import User from "@/models/adminModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
export default async function Homelayout({ children }) {
  const session = await getServerSession(authOption);
  if (!session) {
     redirect('/');
  }
  const page = await User.findOne({email: session.user.email});
  console.log(page);

  if(!page){
    redirect('/');
  }
  return (
    <>
      <div className="containerlayout">
        <div className="maincontent">
          <div className=" flex flex-row min-h-full gap-5 bg-slate-50 ">
            <div className="flex flex-col  w-1/5 pt-5 items-center  gap-5 bg-slate-100 shadow-lg sticky top-0 ">
            <Profilephoto width={150} height={150}/>
            <div className=" flex gap-1">
            <FontAwesomeIcon icon={faPagelines} className="w-5 h-5 text-blue-500"/> /
            <Link className=' text-blue-500 font-serif font-bold text-xl hover:border-y-blue-700' href={"/"+ page.username} target="_blank">
              {page.username}
            </Link>
            </div>
            <ActiveLink path="/admin" title={'Admin'} key={"admin"}  />
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
