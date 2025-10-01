import About from '@/components/About'
import Title from '@/components/Title'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main>
      <section className='h-[80vh]'>
        <section className='py-5 z-10 absolute text-white top-30 flex flex-col justify-center items-center w-full'>
          <h1 className={`${instrumentSerif.className} uppercase text-white text-[100px]`}>Our Story</h1>
          <p className=' w-full text-sm px-4 md:w-[50%] text-center'>Our mission is simple but pivotal: to make property transactions as smooth, transparent, and rewarding as possible for our clients. We accomplish this by adhering to our core values, which include integrity, excellence, professionalism, and a deep-seated commitment to serving the best interests of our clients.</p>
        </section>
        <section className='bg-black/20 absolute w-full h-[80vh] left-0 top-0' />
        <Image src={"/aboutHero.jpg"} alt='hero image about' width={1000} height={1000} className='w-full h-full' />
      </section>
      <About />
      <section className='flex flex-col py-5'>
        <Title content='The Experts in local and international property' />
        <article className='flex gap-10 flex-col md:flex-row mt-5'>
          <div className='pl-10'>
            <h4 className='font-bold text-2xl mb-4'>We are Experts</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi repellat qui adipisci odit aliquam. Perferendis sequi nihil nostrum voluptatum a deleniti suscipit fugit similique rerum debitis, eligendi at assumenda totam</p>
          </div>
          <Image src={"/main2.jpg"} alt='main' width={500} height={500} className='w-full h-[500px] object-cover object-center' />
        </article>
        <article className='flex gap-10 flex-col md:flex-row'>
          <Image src={"/main.jpg"} alt='main' width={500} height={500} className='w-full h-[500px] object-cover object-center'/>
          <div className='pt-10 pr-10'>
            <h4 className='font-bold text-2xl mb-4'>We Value Relationships</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi repellat qui adipisci odit aliquam. Perferendis sequi nihil nostrum voluptatum a deleniti suscipit fugit similique rerum debitis, eligendi at assumenda totam</p>
          </div>
        </article>
      </section>
      <div className='flex justify-center items-center'>
        <Image src={"/cert.png"} width={1000} height={1000} className='w-full md:w-[50%] h-full ' alt='certifcate' />
      </div>
    </main>
  )
}

export default page
