'use client';

import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper/modules";
import "swiper/css/pagination"
import "swiper/css";

const FeatureProperties = () => {
  return (
    <Swiper
         modules={[Pagination]}
        pagination={{ clickable: true }}
        style={{ scrollBehavior: "smooth" }}
        className="mt-10 h-[40vh]"
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
        200: {slidesPerView: 1, spaceBetween: 0},
        320: {slidesPerView: 1, spaceBetween: 0},
        600: {slidesPerView: 2, spaceBetween: 0},
        890: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 30 },
      }}
    >
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (1).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-[200px]' src={"/services (2).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (3).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (1).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-[200px]' src={"/services (2).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (3).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (1).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-[200px]' src={"/services (2).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (3).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (1).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-[200px]' src={"/services (2).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full'>
            <Image className='w-full h-full' src={"/services (3).jpg"} alt='' width={100} height={100} />
        </div>
        <h3 className='text-center font-xl font-bold'>139999$</h3>
        <p className='text-center font-[400]'>LONDON</p>
      </SwiperSlide>
      
    </Swiper>
  )
}

export default FeatureProperties
