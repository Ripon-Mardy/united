'use client'
import React, {useState} from "react";
import Link from "next/link";

import { FaAngleDown } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { useEffect } from "react/cjs/react.production.min";
import axiosInstance from "@/helpers/axiosInstance";

const CategorySection = () => {
  const [isOpenBar, setIswOpenBar] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [categoryList, setCategoryList] = useState([])
  const [isCategory, setIsCategory] = useState(false);
  const [loading, setLoading]= useState(true);
  const [error, setError] = useState([])

  const handleFilterBarClick = () => {
    setIswOpenBar(!isOpenBar)
}
const handleProductCategory = (tabname) => {
  setDropdown(tabname);
  setIsCategory(!isCategory);
};

useEffect(() => {
const fetchCategory = async () => {
  try {
    const res = await axiosInstance.get('/categories?taxonomy_type=categories');
    setCategoryList(res.data.data)
  } catch (error) {
    
  } // end try category
}// end fetchCategory
fetchCategory()
}, [])
  return (
    <>
      <div>
        <div className=" md:hidden">
          <div className="md:hidden flex items-center justify-between bg-navBg text-white p-2 rounded-sm mb-4 w-full">
            <h2 className="font-medium text-base capitalize">Product Filter</h2>
            <AiOutlineBars
              onClick={handleFilterBarClick}
              className="text-xl cursor-pointer"
            />
          </div>

          <div className="mb-5">
            {isOpenBar && (
              <div className="md:w-1/4 flex flex-col gap-4 md:hidden w-full">
                <div className="md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium">
                  <div
                    onClick={() => handleProductCategory(1)}
                    className="flex items-center justify-between w-full"
                  >
                    <h2>Rental Equipmen st</h2>
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
      </div>

      <div className="md:w-1/4 md:flex md:justify-between w-full">
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
    </>
  );
};

export default CategorySection;
