import { redirect } from 'next/navigation';
//import {Avatar} from "@nextui-org/react";
import "../style.css"
import Link from 'next/link';
import Image from 'next/image';
import User from "@/models/adminModel";
import connect from '@/backend/dbConnection/db';
const Page = async({params}) => {
  connect()
const uri=params.id
console.log(uri, "123")
const page = await User.findOne({username:uri});
console.log(page, "pppp")
if(!page){
  redirect('/')
}
  return (
    <div className=" flex justify-center items-center text-center min-h-screen" style={page.bgstate==='colour' ?{backgroundColor:page.colour} : {backgroundImage:`url(${page.imageurl})`}}>
    <div className=' kk flex flex-col justify-center items-center rounded-xl gap-10 lg:w-1/2 md:w-full' >
    <div className=' my-5'>
    <Image src={page.profileimage} width={150} height={150} alt='image' className=" rounded-full" />
    </div>
    
    <div className='font-serif text-lg text-white font-medium flex flex-col gap-3'>
    <h2>#{page.username}</h2>
      <h2>@ {page.name}</h2>
      <h2> Bio 🤓 : {page.bio} </h2>
      <h2> Location 🔎 : {page.location} </h2>
    </div>
    <div className='w-full flex items-center flex-col'>
      {page.socialLinks.map((data,index)=>(
        <div  className='font-serif text-lg my-4 w-3/5 py-2 rounded-3xl border-white border-4 text-white hover:text-black hover:bg-[#fff] ' key={index}>
                <Link target="_blank" className='w-full' href={data.link} >{data.title}</Link>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Page




// {
//   _id: new ObjectId('65e9c2923dc8278f2b3f4f2b'),
//   username: 'kk',
//   email: 'h.hiteshbansal@gmail.com',
//   socialLinks: [
//     {
//       key: '1711561178132',
//       title: 'linkdin',
//       link: '2222222222222222222222222222222222222222',
//       chosen: false,
//       selected: false
//     },
//     {
//       key: '1711561202308',
//       title: 'hhhhhhhhhh',
//       link: '99999999',
//       chosen: false,
//       selected: false
//     },
//     {
//       key: '1711561237929',
//       title: 'llllll',
//       link: '123',
//       chosen: false,
//       selected: false
//     },
//     {
//       key: '1711602711434',
//       title: '1',
//       link: '1',
//       chosen: false,
//       selected: false
//     },
//     {
//       key: '1711602718682',
//       title: '11',
//       link: '11',
//       chosen: false,
//       selected: false
//     },
//     {
//       key: '1711602722920',
//       title: '1',
//       link: '1',
//       chosen: false,
//       selected: false
//     }
//   ],
//   __v: 0,
//   bio: 'Software Developer',
//   location: 'india',
//   name: 'Hitesh Bansal',
//   colour: '#794444',
//   imageurl: 'imageurl',
//   bgstate: 'colour'
// }