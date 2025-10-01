import { instrumentSerif } from '@/fonts/font'
import React from 'react'
import Achivments from './Achivments'
import Title from './Title'

const WhyUs = () => {
  return (
    <section className='mt-15'>
      <Title content='Why Choose Hafsons?' />
      <p className='mt-2 font-[400] px-5'>At Hafsons, we offer a refreshing approach to selling exclusive homes, combining individual flair and attention to detail with the expertise of local estate agents to create a strong international network, with powerful marketing capabilities.</p>
      <Achivments />
    </section>
  )
}

export default WhyUs
