import Image from "next/image";
import photo from '@/media/photo.png'
export default function Home() {
  return (
    <>
    <div className="container mx-5 gap-9 my-20">
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
<form className="flex flex-row items-center">
  <span className='bg-white text-black py-3 ps-6'>linklist.to/</span>
  <input type="text" placeholder="username"  className='py-3 text-black'/>
  <button className='bg-emerald-600 px-5 py-3 text-black border-none select-none'>Sign in Free</button>
</form>
      </div>

<Image src={photo} width={500} height={200}></Image>
</div>
    </>
  )
}
