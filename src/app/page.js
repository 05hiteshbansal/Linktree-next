import Image from "next/image";
import photo from '@/media/photo.png'
import Form from "@/components/home_utility/homeForm/form";
export default function Home() {
 
  return (
    <>
    <div className="container gap-9 my-20">
      <div >
        {/* <div>
          <h1>A bloging website</h1>
          <p>
            A final destination to all searches and thoughts
          </p>
        </div>
          <button>Learn More</button>
          <button>Contact</button>
      </div>
      <div> */}
      <div className='flex-col flex gap-3 mb-8 max-w-lg mt-8'>
      <h1 className='text-5xl font-bold'> Get Pesonlized Link for Everything</h1>
        <p className='text-2xl'>A one webpage solution to all Social and Proffesional links at one place </p> 
      </div>
<Form/>
      </div>

<Image src={photo} width={500} height={200}></Image>
</div>
    </>
  )
}
