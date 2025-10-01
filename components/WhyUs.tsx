import { instrumentSerif } from '@/fonts/font'
import React from 'react'
import Achivments from './Achivments'

const WhyUs = () => {
  return (
    <section className='mt-10'>
      <h3 className={`${instrumentSerif.className} text-3xl mb-2 text-center`}>Why Choose Us?</h3>
      <Achivments />
    </section>
  )
}

export default WhyUs
