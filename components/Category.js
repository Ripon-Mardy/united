"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { AiOutlineBars } from "react-icons/ai";
import axiosInstance from "@/helpers/axiosInstance";

const CategorySection = () => {
  const [isOpenBar, setIswOpenBar] = useState(false);
  const [categoryItems, setIsCategoryItems] = useState([]);

  const handleFilterBarClick = () => {
    setIswOpenBar(!isOpenBar);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axiosInstance.get(
          "/categories?taxonomy_type=categories&limit=50"
        );
        setIsCategoryItems(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCategory();
  }, []);

  return (
    <>
      {/* mobile view  */}
      <div className=" md:hidden">
        <div className="md:hidden flex items-center justify-between bg-navBg text-white p-2 rounded-sm mb-4 w-full">
          <h2 className="font-medium text-base capitalize">Product Filter</h2>
          <AiOutlineBars
            onClick={handleFilterBarClick}
            className="text-xl cursor-pointer"
          />
        </div>

        <div className="border border-gray-300 rounded-md">
          {isOpenBar && (
            <>
              {categoryItems.map((items, index) => (
                <div key={index} className="p-2 py-2">
                  <Link href={`/product-category/${items.slug}`}>
                    {items.name}
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* desktop view  */}
      <div className="md:w-1/4 md:flex flex-col space-y-5 w-full md:border md:border-gray-300 md:rounded-md p-3">
        {categoryItems.map((items, index) => (
          <div key={index} className=" md:w-full md:flex flex-col hidden">
            <Link href={`/product-category/${items.slug}`}> {items.name} </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySection;
