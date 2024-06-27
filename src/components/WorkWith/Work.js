'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';


// === images work === 
import work1 from './../../../public/Image/Work with/1.jpg'
import work2 from './../../../public/Image/Work with/2.jpg'
import work3 from './../../../public/Image/Work with/3.png'
import work4 from './../../../public/Image/Work with/4.png'
import work5 from './../../../public/Image/Work with/5.png'
import work6 from './../../../public/Image/Work with/6.jpg'
import work7 from './../../../public/Image/Work with/7.png'
import work8 from './../../../public/Image/Work with/8.png'

// === images partnar ===
import partner1 from './../../../public/Image/partnar/1.png'
import partner2 from './../../../public/Image/partnar/2.png'
import partner3 from './../../../public/Image/partnar/3.png'
import partner4 from './../../../public/Image/partnar/4.png'
import partner5 from './../../../public/Image/partnar/5.png'
import partner6 from './../../../public/Image/partnar/6.jpg'
import partner7 from './../../../public/Image/partnar/7.png'
import partner8 from './../../../public/Image/partnar/8.png'
import partner9 from './../../../public/Image/partnar/9.png'
import partner10 from './../../../public/Image/partnar/10.png'
import partner11 from './../../../public/Image/partnar/11.jpg'
import partner12 from './../../../public/Image/partnar/12.jpg'
import partner13 from './../../../public/Image/partnar/13.jpg'
import partner14 from './../../../public/Image/partnar/14.jpg'
import partner15 from './../../../public/Image/partnar/15.png'
import partner16 from './../../../public/Image/partnar/16.png'
import partner17 from './../../../public/Image/partnar/17.jpg'
import partner18 from './../../../public/Image/partnar/18.png'
import partner19 from './../../../public/Image/partnar/19.png'
import partner20 from './../../../public/Image/partnar/20.png'
import partner21 from './../../../public/Image/partnar/21.png'
import partner22 from './../../../public/Image/partnar/22.jpg'
import partner23 from './../../../public/Image/partnar/23.png'
import partner24 from './../../../public/Image/partnar/24.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Work = () => {
  return (
    <>
    <div className='container mx-auto px-3 md:px-0 py-8'>
      <h1 className='md:text-4xl text-3xl text-textHeadingColor font-semibold text-center py-12'>We Work With</h1>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work1} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work2} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work3} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work4} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work5} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work6} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work7} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={work8} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>



    <div className='container mx-auto px-3 md:px-0 py-10'>
      <h1 className='md:text-4xl text-3xl text-textHeadingColor font-semibold text-center py-12'>Some Of Our Valued Partners. Why You Not Next?</h1>
       <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner1} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner2} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner3} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner4} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner5} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner6} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner7} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner8} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner9} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner10} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner11} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner12} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner13} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner14} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner15} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner16} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner17} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner18} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner19} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner20} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner21} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner22} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner23} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='md:w-48 w-60 border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out'>
                <Image src={partner24} width={50} height={50} layout='responsive' className='imgRation'></Image>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>

    </>
  )
}

export default Work
