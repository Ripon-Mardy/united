'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'

// === image === 
import ep1 from './../../../public/Image/Product review/Explore Product/ep1.png'


// import required modules
import { Pagination } from 'swiper/modules';
const ProductExplore = () => {
  return (
    <div>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-white'>
            <Image src={ep1}></Image>
            <h1 className='text-black text-2xl'>1.5T Three Wheel Electric Forklift</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-white'>
            <Image src={ep1}></Image>
            <h1 className='text-black text-2xl'>1.5T Three Wheel Electric Forklift</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-white'>
            <Image src={ep1}></Image>
            <h1 className='text-black text-2xl'>1.5T Three Wheel Electric Forklift</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-white'>
            <Image src={ep1}></Image>
            <h1 className='text-black text-2xl'>1.5T Three Wheel Electric Forklift</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-white'>
            <Image src={ep1}></Image>
            <h1 className='text-black text-2xl'>1.5T Three Wheel Electric Forklift</h1>
            </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default ProductExplore
