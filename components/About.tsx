import React from 'react'
import Image from 'next/image'
import { instrumentSerif, interTight } from '@/fonts/font'
import CollapseSection from './Collapse'

const About = () => {
  return (
    <section className="pt-10 sticky top-0 min-h-screen bg-main flex flex-col gap-5 px-20 ">
    <h3 className={`text-center text-4xl font-extrabold ${interTight.className}`}>ABOUT US</h3>
    <div className="flex gap-6 h-full">
        <div className={`flex-1 text-xl font-light`}>
            <h4 className='font-semibold mb-3'>What the business is About?</h4>
            <p>We offer the very best services in our field. We never settle for second best and always have your satisfaction as our top priority. It’s who we are and we are proud of it.</p>
           <CollapseSection />
        </div>
        <Image src={"/imageTeam1.jpeg"} alt="about image" className="h-full w-full flex-1  object-cover object-center" width={500} height={500} />
    </div>
    </section>
  )
}

export default About
