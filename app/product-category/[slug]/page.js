"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import axiosInstance from "@/helpers/axiosInstance";
import CategorySection from "@/components/Category";

import { FaArrowRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { stripHtmlTags } from "@/helpers/truncate";

const page = ({ params }) => {
  const id = params.slug;
  const [filterProduct, setfilterProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get(`/posts?category_slug=${id}`);
        setfilterProduct(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className=" productImageCover py-12 md:py-28">
        <div className=" container mx-auto px-3 md:px-0">
          <h2 className="text-white font-semibold text-4xl capitalize">{id}</h2>
          <div className="text-white  mt-3">
            <Link href={"/"}>Home /</Link>
            <span>Forklift</span>
          </div>
        </div>
      </div>

      {/* hero buttom section  */}
      <div className="container mx-auto px-3 md:px-0 py-10">
        <div className="flex items-start justify-center gap-2 md:gap-6 flex-wrap">
          <Link
            href={"#"}
            className="bg-bgYellow p-1 px-3 rounded-full text-sm md:text-base "
          >
            Diesel Forklift
          </Link>
          <Link
            href={"#"}
            className="bg-bgYellow p-1 px-3 rounded-full text-sm  md:text-base"
          >
            Electric Forklift
          </Link>
          <Link
            href={"#"}
            className="bg-bgYellow p-1 px-3 rounded-full text-sm md:text-base"
          >
            Lithium Powered Forklift
          </Link>
          <Link
            href={"#"}
            className="bg-bgYellow p-1 px-3 rounded-full text-sm md:text-base "
          >
            LPG Forklift
          </Link>
          <Link
            href={"#"}
            className="bg-bgYellow p-1 px-3 rounded-full text-sm md:text-base"
          >
            Specialized Forklift
          </Link>
        </div>

        <div className="mt-3 mb-20">
          <p className="md:text-lg my-4">
            Forklift is a small industrial vehicle, having a power operated
            forked platform attached at the front that can be raised and lowered
            for insertion under a cargo to lift or move it. Forklifts serve the
            needs of various industries including warehouses and other large
            storage facilities.
          </p>
          <p className="my-4 md:text-lg">
            Forklifts are powered by electric battery or combustion engines.
            Some Forklifts allow the operators to sit while driving and
            operating the machine while others require the operator to stand. It
            is being extensively used throughout the industry for transporting
            materials and goods.
          </p>
        </div>

        {/* product list  */}

        <div className="md:flex gap-10">
          <CategorySection/>

          <div className="md:w-[75%]">
            <div className="md:py-16 flex flex-col items-start justify-center gap-10">
              {filterProduct.map((product, index) => (
                <div
                  key={index}
                  className="md:flex md:gap-10 md:items-center md:justify-center"
                >
                  <Image
                    width={300}
                    height={300}
                    alt={product.name}
                    priority
                    src={product.featured_image}
                    className="md:w-80 md:h-80 object-cover"
                  ></Image>
                  <div>
                    <h2 className="md:text-3xl text-2xl mt-4 font-semibold">
                      {product.Product_title}
                    </h2>
                    {/* <p className="md:text-lg mt-3">{product.description}</p> */}
                    <p className="md:text-lg mt-3">
                      {stripHtmlTags(product.description)}
                    </p>
                    <Link
                      href={`/product/${product.slug}`}
                      className="w-fit relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase text-sm"
                    >
                      more <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* pagination  */}
            <div className="flex mt-10 ">
              <Link
                href={"#"}
                className=" border border-gray-200 px-4 p-1 bg-navBg text-white hover:bg-blue-900 duration-200 ease-in-out hover:text-white"
              >
                1
              </Link>
              <Link
                href={"#"}
                className=" border border-gray-200 px-4 p-1 hover:bg-blue-900 duration-200 ease-in-out hover:text-white"
              >
                2
              </Link>
              <Link
                href={"#"}
                className="flex items-center gap-2 border border-gray-200 px-4 p-1 hover:bg-blue-900 duration-200 ease-in-out hover:text-white"
              >
                Next Page <FaAnglesRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
