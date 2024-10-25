"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import CategorySection from "@/components/Category";
import GetAQuote from "@/components/GetAQuote";
import { stripHtmlTags } from "@/helpers/truncate";

const ITEMS_PER_PAGE = 10; 

const page = ({ params }) => {
  const id = params.slug;
  const [filterProduct, setfilterProduct] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

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
  }, [id]);

  const openPopUp = (productName) => {
    setSelectedProductName(productName); 
    setIsFormVisible(true); 
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const totalProducts = filterProduct.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filterProduct.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="productImageCover py-12 md:py-28">
        <div className="container mx-auto px-3 md:px-0">
          <h2 className="text-white font-semibold text-4xl capitalize">{id}</h2>
          <div className="text-white mt-3">
            <Link href="/">Home /</Link>
            <span>Forklift</span>
          </div>
        </div>
      </div>

      {/* Hero button section */}
      <div className="container mx-auto px-3 md:px-0 py-10">
        <div className="flex items-start justify-center gap-2 md:gap-6 flex-wrap">
          {/* ...menu items */}
        </div>

        <div className="mt-3 mb-20">
          <p className="text-sm md:text-lg my-4">Forklift is a small industrial vehicle, having a power operated forked platform attached at the front that can be raised and lowered for insertion under a cargo to lift or move it. Forklifts serve the needs of various industries including warehouses and other large storage facilities.</p>
          <p className="text-sm my-4 md:text-lg">Forklifts are powered by electric battery or combustion engines. Some Forklifts allow the operators to sit while driving and operating the machine while others require the operator to stand. It is being extensively used throughout the industry for transporting materials and goods.</p>
        </div>

        {/* Product list */}
        <div className="md:flex gap-10">
          <CategorySection />

          <div className="md:w-[75%]">
            <div className="md:py-16 flex flex-col items-start justify-center gap-10">
              {currentProducts.map((product, index) => (
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
                    className="md:w-52 md:h-52 object-cover"
                  />

                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold">{product.name}</h2>
                    <h2 className="md:text-2xl text-3xl mt-4 font-semibold">
                      {product.Product_title}
                    </h2>
                    <p className="text-base md:text-lg mt-3">
                      {stripHtmlTags(product.description)}
                    </p>

                    <div className="flex space-x-5">
                      <Link
                        href={`/product/${product.slug}`}
                        className="bg-navBg p-2 px-5 mt-5 text-white rounded-sm inline-block font-semibold text-sm uppercase hover:bg-navHoverColor duration-150 ease-in-out"
                      >
                        More
                      </Link>

                      <button
                        onClick={() => openPopUp(product.Product_title)} // Pass product name to openPopUp
                        className="border border-buttonborder p-2 px-5 mt-5 text-black rounded-sm inline-block font-semibold text-sm uppercase hover:bg-navHoverColor hover:text-white duration-150 ease-in-out"
                      >
                        Get a quote
                      </button>
                    </div>
                    
                    {/* GetAQuote component */}
                    <GetAQuote
                      visible={isFormVisible}
                      onClose={handleCloseForm}
                      productName={product.name} 
                      productId={product.id}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex mt-10">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`border px-4 p-1 ${
                      currentPage === index + 1
                        ? "bg-navBg text-white"
                        : "hover:bg-blue-900 text-black"
                    } duration-200 ease-in-out`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
