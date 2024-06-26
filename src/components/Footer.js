import React from 'react'
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
import footer1 from './../../public/Image/Footer Gallary/footer1.png'
import footer2 from './../../public/Image/Footer Gallary/footer2.jpg'
import footer3 from './../../public/Image/Footer Gallary/footer3.png'
import footer4 from './../../public/Image/Footer Gallary/footer4.jpg'
import footer5 from './../../public/Image/Footer Gallary/footer5.jpeg'

const Footer = () => {
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
                        <Image src={footer1} width={100} height={100}></Image>
                        <Image src={footer2} width={100} height={100}></Image>
                        <Image src={footer3} width={100} height={100}></Image>
                        <Image src={footer4} width={100} height={100}></Image>
                        <Image src={footer5} width={100} height={100}></Image>
                    </div>
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
