import React from 'react'
import Image from 'next/image'
import { instrumentSerif, interTight } from '@/fonts/font'
import CollapseSection from './Collapse'

const About = () => {
  return (
    <section className="pt-10  min-h-screen flex flex-col gap-5 px-20 ">
    <h3 className={`text-center text-4xl font-bold mb-3 ${interTight.className}`}>ABOUT US</h3>
    <div className="flex gap-6 h-full">
        <div className={`flex-1 text-xl font-light`}>
            <h4 className='font-semibold mb-3'>What the business is About?</h4>
            <p className='font-[400]'>We offer the very best services in our field. We never settle for second best and always have your satisfaction as our top priority. It’s who we are and we are proud of it.</p>
           <CollapseSection />
        </div>
        <Image src={"/about.jpg"} alt="about image" className="h-[500px] w-full flex-1  object-contain object-top" width={500} height={500} />
    </div>
    </section>
  )
}

export default About
