import { footer } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={`bg-main pt-10 flex flex-col gap-5 md:gap-10 px-10`}>
      {/* <Image /> */}
      <div className='flex flex-col md:flex-row gap-10 md:gap-20'>
        <Image src={"/logo.png"}  alt='logo footer' width={130} height={100} />
        <p className={`${instrumentSerif.className} text-3xl w-full md:w-[60%]`}>We offer the very best services in our field. We never settle for second best and always have your satisfaction as our top priority. It’s who we are and we are proud of it.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-between'>
        <div className='flex flex-col gap-3'>
          <h6 className="font-semibold">Property</h6>
          <div className='flex gap-2 flex-col'>
          <Link href="/sales">Property for sale</Link>
          <Link href={"/lettings"}>Property for rent</Link>
          <Link href={"/our-projects"}>Projects</Link>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h6 className="font-semibold">How can we help?</h6>
          <div className='flex gap-2 flex-col'>
            <Link href="/valuation">Value my Property</Link>
            <Link href={"/contact"}>List my property</Link>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h6 className="font-semibold">Business Hours</h6>
          <div className='flex gap-2 flex-col'>
            <p>Mon - Fri - 9:00 am - 5:00 pm</p>
            <p>Saturday - Appointment only</p>
            <p>Sunday - Closed</p>
          </div>
        </div>
        <div className='flex gap-3 flex-col'>
          <h6 className="font-semibold">Reach us</h6>
          <div className='flex gap-2 flex-col'>
          <p><FaPhone className='inline-block mr-1' /> 0208 679 9353</p>
          <p><FaEnvelope className='inline-block mr-1' /> info@hafsons.co.uk</p>
          <address><FaSearchLocation className='inline-block mr-1' /> 656 Streatham High Road, London, SW16 3QL</address>
          </div>
        </div>
      </div>
      <div>
        <p>&copy; Copyright Hafsons | All Rights Reserved {new Date().getFullYear()}</p>
        <p>Credit: <Link className='underline text-blue-700' href={"https://scrupulous.vercel.app"}>Scrupulous</Link></p>
      </div>
      <div className='flex gap-5 items-center mb-6'>
        <h6>Follow us: </h6>
        <div className='flex gap-4 items-center'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  )
}

export default Footer
