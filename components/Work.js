"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Loading from "./Loading";

const Work = () => {
  const [brands, setBrands] = useState([]); // brands
  const [pratners, setPartners] = useState([]); // partners
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch brands
    const fetchBrands = async () => {
      try {
        const res = await axiosInstance.get("/posts?term_type=work_with"); // Use axiosInstance to fetch data
        setBrands(res.data.data); // Set the product data
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };
    fetchBrands();

    // fetch Partners

    const fetchPartners = async () => {
      try {
        const res = await axiosInstance.get("/posts?term_type=clients");
        setPartners(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPartners();
  }, []);

  if(loading) {
    return <> <Loading/> </>
  }

  if(error) {
    return <> {setError(error.message)}  </>
  }

  return (
    <>
      <div className="container mx-auto px-3 py-5">
        <h4 className="md:text-3xl text-xl text-textHeadingColor font-semibold text-center">
          We Work With
        </h4>
        <Swiper
          slidesPerView={1}
          spaceBetween={4}
          // pagination={{
          //   clickable: true,
          // }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          { brands.map((brand, brandIndex) => (
            <SwiperSlide key={brandIndex}>
              <div className=" border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out mt-5 w-full">
                <Image
                  src={brand?.featured_image}
                  width={300}
                  height={300}
                  alt={brand.name}
                  priority
                  className=" w-full"
                ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto px-3 md:px-0 py-5">
        <h2 className="md:text-3xl text-xl text-textHeadingColor font-semibold text-center">
          Some Of Our Valued Partners. Why You Not Next?
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={6}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            360: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {pratners.map((partner, partnerIndex) => (
            <SwiperSlide key={partnerIndex}>
              <div  className=" border border-gray-300 rounded-md p-2 mx-auto hover:shadow-2xl duration-150 ease-in-out mt-5 w-full">
                <Image
                  src={partner?.featured_image}
                  width={500}
                  height={500}
                  alt={partner.name}
                  priority
                  className="imgRation w-full"
                ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Work;
