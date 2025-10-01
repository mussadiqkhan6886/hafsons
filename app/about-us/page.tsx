import About from '@/components/About'
import Title from '@/components/Title'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main>
      <section className='h-[80vh]'>
        <h1 className={`${instrumentSerif.className} text-[80px] md:text-[100px] lg:text-[150px] text-white absolute bottom-50 `}>We Value Small things</h1>
        <Image src={"/aboutHero.jpg"} alt='hero image about' width={1000} height={1000} className='w-full h-full' />
      </section>
      <About />
      <section className='py-5 flex flex-col justify-center items-center w-full'>
        <Title content='OUR STORY' />
        <p className=' w-full text-sm px-4 md:w-[50%] text-center'>Our mission is simple but pivotal: to make property transactions as smooth, transparent, and rewarding as possible for our clients. We accomplish this by adhering to our core values, which include integrity, excellence, professionalism, and a deep-seated commitment to serving the best interests of our clients.</p>
      </section>
      <div className='flex justify-center items-center'>
      <Image src={"/cert.png"} width={1000} height={1000} className='w-full md:w-[50%] h-full ' alt='certifcate' />
      </div>
    </main>
  )
}

export default page
