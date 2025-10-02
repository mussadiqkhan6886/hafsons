import Title from '@/components/Title'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Lettings = () => {
  return (
    <main>
      <section className='h-[80vh]'>
        <section className='py-5 z-10 absolute text-white top-35 flex flex-col justify-center items-center w-full'>
          <h1 className={`${instrumentSerif.className}  text-white text-[100px]`}>Lettings</h1>
          <p className=' w-full text-lg px-4 md:w-[50%] text-center'>We know that there is much more to selling a property than recommending an asking price and marketing it to buyers. We guide you through every step of the way, from advising on how best to present your home for viewings, to negotiating the sale and liaising with solicitors</p>
        </section>
          <section className='bg-black/20 absolute w-full h-[80vh] left-0 top-0' />
          <Image src={"/aboutHero.jpg"} alt='hero image about' width={1000} height={1000} className='w-full h-full' />
      </section>
      <section className='flex flex-col gap-10 my-15 px-20'>
          <section className='flex flex-col gap-8'>
            <section className='flex flex-col md:flex-row-reverse gap-10 px-10'>
              <div className=' border border-gray-200 p-5'>
                <Title content='Experts in Residential Lettings' />
                <div className='flex gap-5 items-start mt-5'>
                  <Image className='w-[60%] h-full object-cover object-top' src={"/about.jpg"} alt='director image' width={100} height={100} />
                  <div className='mt-10'>
                    <h5 className='whitespace-nowrap font-semibold'>Sales & Lettings Director</h5>
                    <p>+44 7507 921011</p>
                    <Link href={"/contact"}>Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className='flex-1 '>
                <p className='w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur in dicta aliquid blanditiis ratione iste nulla nectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi ectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi ectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi esciunt, sapiente unde dignissimos molestias quaerat quia doloremque nobis tempora, id consequatur mollitia ab!</p>
              </div>
            </section>
            <article className='mt-5'>
              <h5 className='font-bold mb-3 w-[60%] text-3xl'>A one-stop shop of honest and insightful lettings advice, guidance and services for landlords</h5>
              <p className='font-[400]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi ectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi ectetur adipisicing elit. Tenetur architecto voluptatum tempora odio. Rem porro quis quidem sequi asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi quae culpa!asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi quae culpa!asperiores, cupiditate quaerat praesentium perferendis nisi reprehenderit voluptatem distinctio quasi quae culpa!</p>
              
            </article>
          </section>
        </section>
        <div>
          <Title content='Property for Letting' />
          <button>View all Properties</button>
        </div>
        {/* Prop */}
    </main>
  )
}

export default Lettings
