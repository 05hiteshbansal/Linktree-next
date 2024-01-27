import Image from 'next/image'
import React from 'react'
import aboutImage from '@/media/about.png'
const About = () => {
  return (
    <div>

      <Image src={aboutImage} width={500} height={500} alt='none'></Image>
    </div>
  )
}

export default About