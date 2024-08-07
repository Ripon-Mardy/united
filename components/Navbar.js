'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// === imaage === 
import unitedLogo from './../public/Image/United.png'

// === icons ===
import { FaAngleDown } from "react-icons/fa6";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaWhatsappSquare,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdSavedSearch } from "react-icons/md";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleNavOpen = (tabnumber) => {
    setIsOpen(!isOpen)

    setActiveDropdown(tabnumber)

  }

  const handleBarOpen = () => {
    setIsNavOpen(!isNavOpen)
  }

  const searchOpen = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
  }

  const variants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: '100%' },
    transition: { duration: 0.2 }
  }

  return (
    <>
      <div className="container mx-auto w-full py-3 px-3 md:px-0">


        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center justify-between w-full">
            {/* ====logo === */}
            <div>
              <Link href={"#"} >
                <Image src={unitedLogo} width={150} height={150} alt="united" className="md:w-52"></Image>
              </Link>
            </div>
            {/* === mobile bar ===  */}
            <div className='flex items-center justify-center gap-3 xl:hidden'>
              <div onClick={searchOpen}>
                <IoSearch className='text-2xl cursor-pointer' />
              </div>

             {
              isSearchOpen && (
                <div className='fixed bg-black inset-0 bg-opacity-75 flex items-start justify-center z-50'>
                <button onClick={closeSearch} className='absolute right-4 top-4 text-white text-xl bg-navBg p-2 rounded-md'>X</button>
               <div className='flex items-center justify-center w-fit bg-white mt-36 gap-3 rounded-md overflow-hidden'>
               <input type="search" className='block p-3 outline-none' placeholder='Search Product By Name' />
               <MdSavedSearch className='text-3xl cursor-pointer'/>
               </div>
              </div>
              )
             }

              <div onClick={handleBarOpen} className="text-2xl cursor-pointer text-gray-700 block xl:hidden">
                {isNavOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>

            {/* ==== end mobile bar === */}
          </div>

          {/* === search bar  ==  */}

          <div className='hidden xl:block'>

            <div className='flex items-center justify-center gap-3 border border-gray-400 shadow px-2 rounded-md'>
            <input type="search" className='w-96 p-1.5 outline-none px-2' placeholder='Search prouct by Id or name' />
            <MdSavedSearch className='text-xl cursor-pointer'/>
            </div>

          </div>


          {/* === socail === */}
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
                href={"#"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                About us
              </Link>
              <Link
                href={"#"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                Contact{" "}
              </Link>
              <Link
                href={"#"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                FAQ{" "}
              </Link>
              <Link
                href={"#"}
                className="text-base text-textNavColor cursor-pointer font-medium"
              >
                Gallery
              </Link>
            </div>

          </div>
        </div>



      </div>




      <div className=' bg-navBg text-white top-0 z-10'>

        <div className='container mx-auto xl:flex items-center justify-between gap-14 hidden'>
          <Link href={'#'} className='font-medium flex items-center gap-1 py-5 text-base'>Home</Link>
          <Link href={'#'} className='font-medium flex items-center gap-1 relative group h-full py-5 duration-200 ease-in-out text-base'>Products <FaAngleDown />

            <ul className='absolute left-0 top-16  bg-white text-black w-72 flex flex-col gap-2 rounded-b-md invisible  group-hover:visible z-10 overflow-hidden'>
              <li className='hover:bg-gray-300 p-2 px-3'>Forklift</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Warehouse Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Material Handling Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lifts & Cranes</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Construction Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lithium Powered Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Others</li>
            </ul>

          </Link>

          <Link href={'#'} className='font-medium flex items-center gap-1 relative group h-full py-5 duration-200 ease-in-out text-base'>Tires, Wheels & Rim <FaAngleDown />

            <ul className='absolute left-0 top-16  bg-white text-black w-72 flex flex-col gap-2 rounded-b-md invisible  group-hover:visible z-10 overflow-hidden'>
              <li className='hover:bg-gray-300 p-2 px-3'>Forklift</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Warehouse Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Material Handling Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lifts & Cranes</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Construction Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lithium Powered Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Others</li>
            </ul>

          </Link>

          <Link href={'#'} className='font-medium flex items-center gap-1 relative group h-full py-5 duration-200 ease-in-out text-base'>Batteries <FaAngleDown />

            <ul className='absolute left-0 top-16  bg-white text-black w-72 flex flex-col gap-2 rounded-b-md invisible  group-hover:visible z-10 overflow-hidden'>
              <li className='hover:bg-gray-300 p-2 px-3'>Forklift</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Warehouse Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Material Handling Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lifts & Cranes</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Construction Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lithium Powered Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Others</li>
            </ul>

          </Link>


          <Link href={'#'} className='font-medium flex items-center gap-1 relative group h-full py-5 duration-200 ease-in-out text-base'>Racking & Furniture <FaAngleDown />

            <ul className='absolute left-0 top-16  bg-white text-black w-72 flex flex-col gap-2 rounded-b-md invisible  group-hover:visible z-10 overflow-hidden'>
              <li className='hover:bg-gray-300 p-2 px-3'>Forklift</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Warehouse Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Material Handling Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lifts & Cranes</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Construction Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lithium Powered Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Others</li>
            </ul>

          </Link>

          <Link href={'#'} className='font-medium flex items-center gap-1 relative group h-full py-5 duration-200 ease-in-out text-base'>Spare & Service <FaAngleDown />

            <ul className='absolute left-0 top-16  bg-white text-black w-72 flex flex-col gap-2 rounded-b-md invisible  group-hover:visible z-10 overflow-hidden'>
              <li className='hover:bg-gray-300 p-2 px-3'>Forklift</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Warehouse Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Material Handling Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lifts & Cranes</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Construction Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lithium Powered Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Others</li>
            </ul>

          </Link>


          <Link href={'#'} className='font-medium flex items-center gap-1 relative group h-full py-5 duration-200 ease-in-out text-base'>Rental <FaAngleDown />

            <ul className='absolute -left-40 top-16  bg-white text-black w-72 flex flex-col gap-2 rounded-b-md invisible  group-hover:visible z-10 overflow-hidden'>
              <li className='hover:bg-gray-300 p-2 px-3'>Forklift</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Warehouse Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Material Handling Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lifts & Cranes</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Construction Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Lithium Powered Equipment</li>
              <li className='hover:bg-gray-300 p-2 px-3'>Others</li>
            </ul>

          </Link>



        </div>

        {/* ==== mobile view ====  */}

        <AnimatePresence>
          {
            isNavOpen && (
              <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} transition={{ duration: 0.5 }} exit={{ x: '-100%' }} className='absolute left-0 top-0 h-screen w-2/3 shadow-2xl z-10 xl:hidden bg-white'>

                <div className=''>
                  <div className='bg-white p-4'>
                    <Image src={unitedLogo} width={150} height={150}></Image>
                  </div>

                  <div className='p-3 flex flex-col gap-9 bg-navBg pt-8 py-14'>
                    <Link href={'#'} className='font-medium flex items-center gap-1'>Home</Link>
                    <Link href={'#'} className='font-medium flex items-start flex-col gap-1 relative group h-full duration-200 ease-in-out'>
                      <div className='flex  justify-between items-center w-full'>Products
                        <span onClick={() => handleNavOpen(1)} className='bg-bgYellow text-xl p-0.5 cursor-pointer'><FaAngleDown /></span>
                      </div>
                      {
                        activeDropdown === 1 ? <AnimatePresence>
                          {
                            isOpen && (
                              <motion.div initial='initial' animate='animate' variants={variants} transition={{ duration: 0.5 }} className='flex flex-col gap-4 mt-1 border-t-2 w-full pt-2 border-gray-500'>
                                <Link href={'#'}>Forklift</Link>
                                <Link href={'#'}>Warehouse Equipment</Link>
                                <Link href={'#'}>Material Handling Equipment</Link>
                                <Link href={'#'}>Lifts & Cranes</Link>
                                <Link href={'#'}>Construction Equipment</Link>
                                <Link href={'#'}>Lithium Powered Equipment</Link>
                                <Link href={'#'}>Others</Link>
                              </motion.div>
                            )
                          }
                        </AnimatePresence> : ''
                      }

                    </Link>

                    <Link href={'#'} className='font-medium flex items-start flex-col gap-1 relative group h-full duration-200 ease-in-out'>
                      <div className='flex  justify-between items-center w-full'>Tires, Wheels & Rim
                        <span onClick={() => handleNavOpen(2)} className='bg-bgYellow text-xl p-0.5 cursor-pointer'><FaAngleDown /></span>
                      </div>
                      {
                        activeDropdown === 2 ? <AnimatePresence>
                          {
                            isOpen && (
                              <motion.div initial='initial' animate='animate' variants={variants} transition={{ duration: 0.5 }} className='flex flex-col gap-4 mt-1 border-t-2 w-full pt-2 border-gray-500'>
                                <Link href={'#'}>Forklift</Link>
                                <Link href={'#'}>Warehouse Equipment</Link>
                                <Link href={'#'}>Material Handling Equipment</Link>
                                <Link href={'#'}>Lifts & Cranes</Link>
                                <Link href={'#'}>Construction Equipment</Link>
                                <Link href={'#'}>Lithium Powered Equipment</Link>
                                <Link href={'#'}>Others</Link>
                              </motion.div>
                            )
                          }
                        </AnimatePresence> : ''
                      }

                    </Link>

                    <Link href={'#'} className='font-medium flex items-start flex-col gap-1 relative group h-full duration-200 ease-in-out'>
                      <div className='flex  justify-between items-center w-full'>Batteries
                        <span onClick={() => handleNavOpen(3)} className='bg-bgYellow text-xl p-0.5 cursor-pointer'><FaAngleDown /></span>
                      </div>
                      {
                        activeDropdown === 3 ? <AnimatePresence>
                          {
                            isOpen && (
                              <motion.div initial='initial' animate='animate' variants={variants} transition={{ duration: 0.5 }} className='flex flex-col gap-4 mt-1 border-t-2 w-full pt-2 border-gray-500'>
                                <Link href={'#'}>Forklift</Link>
                                <Link href={'#'}>Warehouse Equipment</Link>
                                <Link href={'#'}>Material Handling Equipment</Link>
                                <Link href={'#'}>Lifts & Cranes</Link>
                                <Link href={'#'}>Construction Equipment</Link>
                                <Link href={'#'}>Lithium Powered Equipment</Link>
                                <Link href={'#'}>Others</Link>
                              </motion.div>
                            )
                          }
                        </AnimatePresence> : ''
                      }

                    </Link>

                    <Link href={'#'} className='font-medium flex items-start flex-col gap-1 relative group h-full duration-200 ease-in-out'>
                      <div className='flex  justify-between items-center w-full'>Racking & Furniture
                        <span onClick={() => handleNavOpen(4)} className='bg-bgYellow text-xl p-0.5 cursor-pointer'><FaAngleDown /></span>
                      </div>
                      {
                        activeDropdown === 4 ? <AnimatePresence>
                          {
                            isOpen && (
                              <motion.div initial='initial' animate='animate' variants={variants} transition={{ duration: 0.5 }} className='flex flex-col gap-4 mt-1 border-t-2 w-full pt-2 border-gray-500'>
                                <Link href={'#'}>Forklift</Link>
                                <Link href={'#'}>Warehouse Equipment</Link>
                                <Link href={'#'}>Material Handling Equipment</Link>
                                <Link href={'#'}>Lifts & Cranes</Link>
                                <Link href={'#'}>Construction Equipment</Link>
                                <Link href={'#'}>Lithium Powered Equipment</Link>
                                <Link href={'#'}>Others</Link>
                              </motion.div>
                            )
                          }
                        </AnimatePresence> : ''
                      }

                    </Link>

                    <Link href={'#'} className='font-medium flex items-start flex-col gap-1 relative group h-full duration-200 ease-in-out'>
                      <div className='flex  justify-between items-center w-full'>Spare & Service
                        <span onClick={() => handleNavOpen(5)} className='bg-bgYellow text-xl p-0.5 cursor-pointer'><FaAngleDown /></span>
                      </div>
                      {
                        activeDropdown === 5 ? <AnimatePresence>
                          {
                            isOpen && (
                              <motion.div initial='initial' animate='animate' variants={variants} transition={{ duration: 0.5 }} className='flex flex-col gap-4 mt-1 border-t-2 w-full pt-2 border-gray-500'>
                                <Link href={'#'}>Forklift</Link>
                                <Link href={'#'}>Warehouse Equipment</Link>
                                <Link href={'#'}>Material Handling Equipment</Link>
                                <Link href={'#'}>Lifts & Cranes</Link>
                                <Link href={'#'}>Construction Equipment</Link>
                                <Link href={'#'}>Lithium Powered Equipment</Link>
                                <Link href={'#'}>Others</Link>
                              </motion.div>
                            )
                          }
                        </AnimatePresence> : ''
                      }

                    </Link>

                    <Link href={'#'} className='font-medium flex items-start flex-col gap-1 relative group h-full duration-200 ease-in-out'>
                      <div className='flex  justify-between items-center w-full'>Rental
                        <span onClick={() => handleNavOpen(6)} className='bg-bgYellow text-xl p-0.5 cursor-pointer'><FaAngleDown /></span>
                      </div>
                      {
                        activeDropdown === 6 ? <AnimatePresence>
                          {
                            isOpen && (
                              <motion.div initial='initial' animate='animate' variants={variants} transition={{ duration: 0.5 }} className='flex flex-col gap-4 mt-1 border-t-2 w-full pt-2 border-gray-500'>
                                <Link href={'#'}>Forklift</Link>
                                <Link href={'#'}>Warehouse Equipment</Link>
                                <Link href={'#'}>Material Handling Equipment</Link>
                                <Link href={'#'}>Lifts & Cranes</Link>
                                <Link href={'#'}>Construction Equipment</Link>
                                <Link href={'#'}>Lithium Powered Equipment</Link>
                                <Link href={'#'}>Others</Link>
                              </motion.div>
                            )
                          }
                        </AnimatePresence> : ''
                      }

                    </Link>




                  </div>

                  <div className=' py-5'>
                    <div className="flex items-center justify-center gap-5">
                      <Link
                        href={"#"}
                        className="bg-facebookBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent hover:text-black ease-in-out duration-200"
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
                    <div className='mt-2'>
                      <p className=' text-center text-textNavColor'>© 2021 United Machinery Bangladesh.</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            )
          }
        </AnimatePresence>

      </div>
    </>
  )
}

export default Navbar
