'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

// === icosn === 
import { FaChevronRight } from "react-icons/fa6";
import {
    FaFacebookF,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    FaWhatsappSquare,
    FaBars,
    FaTimes
} from "react-icons/fa";

// === images === 
import footer1 from './../public/Image/Footer Gallary/footer1.png'
import footer2 from './../public/Image/Footer Gallary/footer2.jpg'
import footer3 from './../public/Image/Footer Gallary/footer3.png'
import footer4 from './../public/Image/Footer Gallary/footer4.jpg'
import footer5 from './../public/Image/Footer Gallary/footer5.jpeg'

const Footer = () => {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [ footer1, footer2, footer3, footer4, footer5];


    const openFullscreen = (image) => {
        setSelectedImage(image)
        setIsFullscreen(true)
    }

    const closeFullscreen = () => {
        setIsFullscreen(false)
        setSelectedImage(null)
    }

    return (
        <div className='bg-footerBg text-white py-8 px-3 md:px-0'>
            <div className='container mx-auto md:flex justify-between flex-col md:flex-row'>

                <div>
                    <h1 className='text-2xl font-semibold'>NAVIGATION</h1>
                    <div className='flex flex-col gap-6 mt-5'>
                        <Link href={'#'} className='flex items-center gap-2 text-textNavColor'> <FaChevronRight className='text-sm' /> About Us</Link>
                        <Link href={'#'} className='flex items-center gap-2 text-textNavColor'> <FaChevronRight className='text-sm' /> Contact Us</Link>
                        <Link href={'#'} className='flex items-center gap-2 text-textNavColor'> <FaChevronRight className='text-sm' /> Sitemap</Link>
                    </div>
                </div>

                <div className='mt-8 md:mt-0'>
                    <h1 className='text-2xl font-semibold'>Connect us</h1>
                    <div className="flex gap-5 mt-5">
                        <Link
                            href={"#"}
                            className="bg-facebookBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent ease-in-out duration-200"
                        >
                            <FaFacebookF />
                        </Link>
                        <Link
                            href={"#"}
                            className="bg-youtubeBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent  ease-in-out duration-200"
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            href={"#"}
                            className="bg-linkedinBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent ease-in-out duration-200"
                        >
                            <FaLinkedin />
                        </Link>
                        <Link
                            href={"#"}
                            className="bg-instagramBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent ease-in-out duration-200"
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            href={"#"}
                            className="bg-whatsappBg p-1.5 rounded-full text-white cursor-pointer hover:border border hover:border-gray-600 hover:bg-transparent ease-in-out duration-200"
                        >
                            <FaWhatsappSquare />
                        </Link>
                    </div>
                </div>

                <div className='flex items-start flex-col mt-8 md:mt-0'>
                    <h1 className='text-2xl font-semibold'>Gallery</h1>
                    <div className='grid grid-cols-3 gap-5 mt-5'>

                        {
                            images.map((image, index) => (
                                <div key={index}>
                                    <Image
                                        src={image}
                                        width={100}
                                        height={100}
                                        alt="Product"
                                        className='cursor-pointer'
                                        onClick={() => openFullscreen(image)}
                                    />
                                </div>
                            ))
                        }
                    </div>

                    {
                        isFullscreen && (
                            <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
                                <button onClick={closeFullscreen} className="absolute top-4 right-4 text-white bg-navBg rounded-full p-3 text-lg font-semibold"> X </button>

                               <Image src={selectedImage} className='max-w-full max-h-full' />
                            </div>
                        )
                    }
                </div>

            </div>

            <div className='w-full h-0.5 bg-gray-800 mt-12'></div>

            <div className='container mx-auto mt-5 text-textNavColor'>
                <div>
                    <p>Copyright © 2021 United Machinery Bangladesh.All Rights Reserved.</p>
                    <h1>Developed By Tritiyo Limited
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default Footer
