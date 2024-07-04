import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// ==== images === 
import aboutus from './../public/Image/about-us.jpg'

const Aboutus = () => {
    return (
        <div className='container mx-auto px-3 md:px-0 py-8'>
            <div className='md:flex items-center justify-center gap-7'>

                <div className='w-full'>
                    <Image src={aboutus} width={450} height={450} className='rounded-md mx-auto'></Image>
                </div>

                <div className='w-full mt-8 md:mt-0'>
                    <h1 className='text-3xl text-textHeadingColor font-semibold my-3'>About Us</h1>
                    <p className='text-lg'>The United Machinery Bangladesh (UMB) is a unique and trustworthy name in the machinery industry throughout Bangladesh. Since 2014, UMB has been providing a complete solution of material handling equipment, construction machines, and spare-parts on-time delivery. We are one of the most leading Forklift supplier in Bangladesh. UMB is currently one of the largest importer, supplier, and distributor in Bangladesh. We have a huge 4S center containing bulk amounts of ready stocks which offer various choices on the products. Upon delivery of our products, UMB’s expert service team ensures further quality wherever required. We highly focus on Material Handling Equipment, Industrial Rack, Wheel Loader, Hand Pallet, VNA truck, Ware House Equipment.</p>
                    <h1 className='md:text-3xl text-2xl mt-4 text-textNavColor font-semibold -tracking-tighter'>We are committed to provide safe industrial solutions to many factories.</h1>
                    {/* <Link href={'#'}>read more</Link> */}
                    <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 capitalize font-semibold mt-4">read more</button>
                </div>

            </div>
        </div>
    )
}

export default Aboutus
