import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main>
      <section className='h-[80vh]'>
        <section className='py-5 z-10 absolute text-white top-35 flex flex-col justify-center items-center w-full'>
          <h1 className={`${instrumentSerif.className} uppercase text-white text-[100px]`}>Lettings</h1>
          <p className=' w-full text-lg px-4 md:w-[50%] text-center'>We know that there is much more to selling a property than recommending an asking price and marketing it to buyers. We guide you through every step of the way, from advising on how best to present your home for viewings, to negotiating the sale and liaising with solicitors</p>
        </section>
          <section className='bg-black/20 absolute w-full h-[80vh] left-0 top-0' />
          <Image src={"/aboutHero.jpg"} alt='hero image about' width={1000} height={1000} className='w-full h-full' />
      </section>
    </main>
  )
}

export default page
