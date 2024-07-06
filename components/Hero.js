'use client'

import React, { useRef, useState } from 'react';
import Image from 'next/image';

// === images ===
import banner1 from './../public/Image/Hero Banner/b1.jpg'
import banner2 from './../public/Image/Hero Banner/b2.jpg'
import banner3 from './../public/Image/Hero Banner/b3.jpg'
import banner4 from './../public/Image/Hero Banner/b4.png'
import banner5 from './../public/Image/Hero Banner/b5.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
  return (
    <div className='container mx-auto px-3 md:px-0 md:py-5 w-full'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div   className='md:h-screen'>
            <Image src={banner1} width={400} height={400} layout='responsive' className=' object-cover w-full'></Image>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='md:h-[500px] h-[400]'>
            <Image src={banner2} width={400} height={400} layout='responsive' className='rounded-md object-cover'></Image>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className='md:h-[500px] h-[400]'>
            <Image src={banner3} width={400} height={400} layout='responsive' className='rounded-md'></Image>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className='md:h-[500px] h-[400]'>
            <Image src={banner4} width={400} height={400} layout='responsive' className='rounded-md object-cover'></Image>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='md:h-[500px] h-[400]'>
            <Image src={banner5} width={400} height={400} layout='responsive' className='rounded-md'></Image>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Hero
