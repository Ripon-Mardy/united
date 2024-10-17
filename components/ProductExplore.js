"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper/modules";
import axiosInstance from "@/helpers/axiosInstance";
import Link from "next/link";
import Loading from "./Loading";
const ProductExplore = () => {
  const [products, setProuducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const brandsList = async () => {
      try {
        const res = await axiosInstance.get("/posts?term_type=product");
        setProuducts(res.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    brandsList();
  }, []);

  if(loading) {
    return <> <Loading/> </>
  }

  if(error) {
    return <> {setError('Something went wrong')} </>
  }

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product, productIndex) => (
          <SwiperSlide key={productIndex}>
            <Link href={`/product/${product.slug}`} className="bg-white">
              <Image src={product?.featured_image} width={200} height={200} priority alt={product.name}></Image>
              <h2 className="text-black text-2xl text-center">
                {product.name}
              </h2>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default ProductExplore;
