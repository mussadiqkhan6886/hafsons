'use client';

import { test } from '@/constants'
import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css";
import Title from './Title';
import { instrumentSerif } from '@/fonts/font';

const Testimonials = () => {
  return (
    <>
      
    <Swiper
        modules={[Pagination]} // add Keyboard
        pagination={{ clickable: true }}
        style={{scrollBehavior: "smooth"}}
        className='mt-10 h-[40vh]'
        slidesPerView={3}
        spaceBetween={10}
        >
        {test.map((review, i) => (
        <SwiperSlide className='w-[400px] h-full shadow-xl px-5' key={i}>
            <h4 className='text-center font-bold text-2xl'>{review.name}</h4>
            <p className={`text-lg font-light`}>{review.message}</p>
        </SwiperSlide>
     ))}
    </Swiper>
    </>
  )
}

export default Testimonials
