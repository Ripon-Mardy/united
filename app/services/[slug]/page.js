"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/helpers/axiosInstance";
import Loading from "@/components/Loading";
import { stripHtmlTags } from "@/helpers/truncate";

const page = ({ params }) => {
  const service = params.slug;

  const [services, setServices] = useState([]); // services
  console.log('services', services);
  
  // const [product, setProduct] = useState([]); //product
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fertch services
    const fetchService = async () => {
      try {
        const res = await axiosInstance.get(`/post?slug=${service}`); // Use axiosInstance to fetch data
        setServices(res.data.data); // Set the service data
      } catch (error) {
        setError(error.message); // Catch and handle errors
      } finally {
        setLoading(false); // Stop loading after the fetch is done
      }
    };
    fetchService();

    // fetch product
    // const fetchProduct = async () => {
    //   const res = await axiosInstance.get('/posts?term_type=product')
    //   setProduct(res.data.data)
    // }
    // fetchProduct()
  }, [service]);

  const [dropdown, setDropdown] = useState(null);
  const [isCategory, setIsCategory] = useState(false);
  const [isOpenBar, setIswOpenBar] = useState(false);

  const handleProductCategory = (tabname) => {
    setDropdown(tabname);
    setIsCategory(!isCategory);
  };

  const handleFilter = () => {
    setIsCategory(!isCategory);
  };

  const handleFilterBarClick = () => {
    setIswOpenBar(!isOpenBar);
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className=" productImageCover py-12 md:py-28">
        <div className=" container mx-auto px-3 md:px-0">
          <h2 className="text-white font-semibold text-4xl">
            {services.name}
          </h2>
          <div className="text-white  mt-3">
            <Link href={"/"}>Home /</Link>
            <span>Forklift</span>
          </div>
        </div>
      </div>

      {/* ===== hero bottom section === */}
      <div className="container mx-auto px-3 md:px-0 py-10">


        <div className="mt-3">
          {/* <p> {services.description} </p> */}
          <h2 className="text-2xl font-medium mb-4 text-textHeadingColor">
            {services.extra_fields[0].meta_value}
          </h2>
          <p className="text-paraColor leading-8 text-sm md:text-base">
            {stripHtmlTags(services.description)}
          </p>
        </div>

        {/* === product list === */}

        {/* <div className="md:flex gap-10">
          <div className="mt-10 md:hidden">
            <div className="md:hidden flex items-center justify-between bg-navBg text-white p-2 rounded-sm mb-4">
              <h2 className="font-medium text-base capitalize">
                Product Filter
              </h2>
              <AiOutlineBars
                onClick={handleFilterBarClick}
                className="text-xl cursor-pointer"
              />
            </div>

            <div className="mb-5">
              {isOpenBar && (
                <div className="md:w-1/4 flex flex-col gap-4 md:hidden  w-full">
                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(1)}
                      className="flex items-center justify-between"
                    >
                      <h2>Rental Equipment</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 1 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(2)}
                      className="flex items-center justify-between"
                    >
                      <h2>Engine Parts</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 2 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(3)}
                      className="flex items-center justify-between"
                    >
                      <h2>Filters</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 3 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(4)}
                      className="flex items-center justify-between"
                    >
                      <h2>Hydraulic parts</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 4 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(5)}
                      className="flex items-center justify-between"
                    >
                      <h2>Transmission Parts</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 5 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(6)}
                      className="flex items-center justify-between"
                    >
                      <h2>Brakes parts</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 6 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(7)}
                      className="flex items-center justify-between"
                    >
                      <h2>Electric Parts</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 7 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(8)}
                      className="flex items-center justify-between"
                    >
                      <h2>Seal kits</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 8 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                    <div
                      onClick={() => handleProductCategory(9)}
                      className="flex items-center justify-between"
                    >
                      <h2>Drive Parts</h2>
                      <FaAngleDown />
                    </div>

                    <div>
                      {dropdown == 9 && isCategory && (
                        <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Forklift
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            excavator
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Wheel loader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            payloader
                          </Link>
                          <Link href={"#"} className="hover:bg-gray-300 p-1">
                            Road Roller
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="md:w-1/4 md:flex md:justify-between w-full md:mt-40">
            <div className="md:w-full md:flex flex-col gap-6 hidden">
              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(1)}
                  className="flex items-center justify-between"
                >
                  <h2>Rental Equipment</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 1 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(2)}
                  className="flex items-center justify-between"
                >
                  <h2>Engine Parts</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 2 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(3)}
                  className="flex items-center justify-between"
                >
                  <h2>Filters</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 3 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(4)}
                  className="flex items-center justify-between"
                >
                  <h2>Hydraulic parts</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 4 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(5)}
                  className="flex items-center justify-between"
                >
                  <h2>Transmission Parts</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 5 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(6)}
                  className="flex items-center justify-between"
                >
                  <h2>Brakes parts</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 6 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(7)}
                  className="flex items-center justify-between"
                >
                  <h2>Electric Parts</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 7 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(8)}
                  className="flex items-center justify-between"
                >
                  <h2>Seal kits</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 8 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                <div
                  onClick={() => handleProductCategory(9)}
                  className="flex items-center justify-between"
                >
                  <h2>Drive Parts</h2>
                  <FaAngleDown />
                </div>

                <div>
                  {dropdown == 9 && isCategory && (
                    <div className="flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2">
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Forklift
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        excavator
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Wheel loader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        payloader
                      </Link>
                      <Link href={"#"} className="hover:bg-gray-300 p-1">
                        Road Roller
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[75%]">
            <div className="md:py-16 flex flex-col items-start justify-center gap-10">
              {product.map((product, index) => (
                <div
                  key={index}
                  className="md:flex md:gap-10 md:items-center md:justify-center"
                >
                  <Image
                    width={300}
                    height={300}
                    src={product?.featured_image}
                    className="md:w-80 md:h-80 object-cover"
                  ></Image>
                  <div>
                    <h2 className="md:text-3xl text-2xl mt-4 font-semibold">
                      {product?.name}
                    </h2>
                    <p className="md:text-lg mt-3">{product?.description}</p>
                    <Link href={`/product/${product?.slug}`}
                      class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase text-sm w-fit"
                    >
                      more <FaArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

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
        </div> */}
      </div>
    </>
  );
};

export default page;
