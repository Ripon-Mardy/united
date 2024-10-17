"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// images 
import unitedLogo from "./../public/Image/United.png";

// icons
import { FaAngleDown } from "react-icons/fa6";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsappSquare,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import axiosInstance from "@/helpers/axiosInstance";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [product, setProduct] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const router = useRouter();

  const [menus, setMenus] = useState([]);
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleNavOpen = (tabnumber) => {
    setIsOpen(!isOpen);

    setActiveDropdown(tabnumber);
  };

  const handleBarOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  const searchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const variants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "100%" },
    transition: { duration: 0.2 },
  };

  useEffect(() => {
    // Fetch all necessary data
    const fetchData = async () => {
      try {
        const productsRes = await axiosInstance.get("/posts?term_type=product");

        // setCategoryData(categoriesRes.data.data);
        setProduct(productsRes.data.data);
        // setMainSpeech(speechRes.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();

    // fetch meu
    const fetchMenu = async () => {
      try {
        const res = await axiosInstance.get("/menus?menu=1");
        setMenus(res.data.data.items);  
      } catch (error) {
        console.log("error", error.message);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const productFilter = product.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterProducts(productFilter);
    } else {
      setFilterProducts([]);
    }
  }, [searchTerm, product]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsFocused(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const selectedProduct = filterProducts.find(
      (product) => product.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (selectedProduct) {
      setSearchTerm("");
      setFilterProducts([]);
      setIsFocused(false);
      router.push(`/product/${selectedProduct.slug}`);
    }
    closeSearch();
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="container mx-auto w-full py-3 px-3 md:px-0 z-10">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center justify-between w-full">
            {/* logo  */}
            <div>
              <Link href={"/"}>
                <Image
                  src={unitedLogo}
                  width={150}
                  height={150}
                  priority
                  alt="united"
                  className="w-36 md:w-48"
                ></Image>
              </Link>
            </div>
            {/* mobile bar  */}
            <div className="flex items-center justify-center gap-3 xl:hidden">
              <div onClick={searchOpen}>
                <IoSearch className="text-2xl cursor-pointer" />
              </div>

              {isSearchOpen && (
                <div className="fixed bg-black inset-0 bg-opacity-75 flex items-start justify-center z-50">
                  <button
                    onClick={closeSearch}
                    className="absolute right-4 top-4 text-white text-xl bg-navBg p-2 rounded-md"
                  >
                    X
                  </button>

                  <form
                    onSubmit={handleSearchSubmit}
                    className=" w-full flex items-center justify-between relative mt-32 px-5"
                  >
                    <div className="flex items-center justify-center w-full">
                      <input
                        type="text"
                        className="w-full py-1.5 outline-none text-base pl-2 rounded-sm"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onFocus={() => setIsFocused(true)}
                      />
                      <span className="text-lg pr-2">
                        <IoSearch />
                      </span>
                    </div>
                    {isFocused && filterProducts.length > 0 && (
                      <ul className="absolute left-5 top-full bg-white border w-3/4 z-30">
                        {filterProducts.map((product) => (
                          <li
                            key={product.id}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                          >
                            <Link
                              href={`/product/${product.slug}`}
                              onClick={() => {
                                setSearchTerm("");
                                closeSearch();
                              }}
                            >
                              {product.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </form>
                </div>
              )}

              <div
                onClick={handleBarOpen}
                className="text-2xl cursor-pointer text-gray-700 block xl:hidden"
              >
                {isNavOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>

           {/* end mobile bar  */}
          </div>

          {/* search bar  */}

          <div className="hidden xl:block w-full z-20">
            <form
              onSubmit={handleSearchSubmit}
              className=" w-full flex items-center justify-between border border-navBorder relative"
            >
              <div className="flex items-center justify-center w-full z-20">
                <input
                  type="text"
                  className="w-full py-1.5 outline-none text-base pl-2 rounded-sm"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onFocus={() => setIsFocused(true)}
                />
                <span className="text-lg pr-2">
                  <IoSearch />
                </span>
              </div>
              {isFocused && filterProducts.length > 0 && (
                <ul className="absolute left-0 top-full bg-white border w-full z-50">
                  {filterProducts.map((product) => (
                    <li
                      key={product.id}
                      className="p-2 cursor-pointer hover:bg-gray-200 z-20"
                    >
                      <Link
                        href={`/product/${product.slug}`}
                        onClick={() => setSearchTerm("")}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>

          {/* social  */}
          <div className="xl:flex flex-col hidden w-full">
            <div className="flex items-center justify-end gap-3">
              <Link
                href={"#"}
                className="bg-facebookBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200 text-sm"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={"#"}
                className="bg-youtubeBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
              >
                <FaYoutube />
              </Link>
              <Link
                href={"#"}
                className="bg-linkedinBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={"#"}
                className="bg-instagramBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"#"}
                className="bg-whatsappBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
              >
                <FaWhatsappSquare />
              </Link>
            </div>

            <div className="flex items-center justify-end md:gap-10 mt-2">
              <Link
                href={"/about-us"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                About us
              </Link>
              <Link
                href={"/contact"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                Contact
              </Link>
              <Link
                href={"/faq"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                FAQ
              </Link>
              <Link
                href={"/gallery"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-navBg text-white top-0">
        <div className="container mx-auto xl:flex items-center justify-between gap-14 hidden">
          <ul className="flex items-center justify-between w-full">
            {menus.map((item) => (
              <li key={item.id} className="relative group py-5">
                <Link
                  href={item.link}
                  className="flex items-center justify-center gap-1 text-base capitalize"
                >
                  {item.label}
                  {item.child && item.child.length > 0 && <FaAngleDown />}
                </Link>

                {/* Dropdown Menu */}
                {item.child && item.child.length > 0 && (
                  <ul className="absolute -left-20 top-full hidden group-hover:block font-medium bg-white text-black shadow-md border-hoverborder p-3 space-y-4 w-60 z-10 ">
                    {item.child.map((childItem) => (
                      <li key={childItem.id}>
                        <Link
                          href={`/product-category/${childItem.link}`}
                          className="text-sm font-medium hover:text-textHoverColor"
                        >
                          {childItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* mobile view  */}

        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ x: "-100%" }}
              className="absolute left-0 top-0 h-screen w-2/3 shadow-2xl z-10 xl:hidden bg-white bg-fixed"
            >

              <ul className="flex flex-col items-center justify-between w-full text-black p-10">
                {menus.map((item) => (
                  <li key={item.id} className="relative group py-5">
                    <Link
                      href={item.link}
                      className="flex items-center justify-center gap-1 text-base capitalize"
                    >
                      {item.label}
                      {item.child && item.child.length > 0 && <FaAngleDown />}
                    </Link>

                    {/* Dropdown Menu */}
                    {item.child && item.child.length > 0 && (
                      <ul className="relative left-0 top-full hidden group-hover:block font-medium bg-white text-black shadow-md border-hoverborder p-3 space-y-4 w-48 z-10 ">
                        {item.child.map((childItem) => (
                          <li key={childItem.id}>
                            <Link
                              href={childItem.link}
                              className="text-sm font-medium"
                            >
                              {childItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
