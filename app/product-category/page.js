import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// ==== image === 
import product1 from './../../public/Image/product-category/p1.png'
import product2 from './../../public/Image/product-category/p2.png'
import product3 from './../../public/Image/product-category/p3.png'
import product4 from './../../public/Image/product-category/p4.png'
import product5 from './../../public/Image/product-category/p5.png'
import product6 from './../../public/Image/product-category/p6.png'
import product7 from './../../public/Image/product-category/7.png'

// === icons === 
import { FaArrowRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";


const page = () => {
    return (
        <>
            <div className=' productImageCover py-12 md:py-28'>


                <div className=' container mx-auto px-3 md:px-0'>
                    <h1 className='text-white font-semibold text-4xl'>Forklift</h1>
                    <div className='text-white  mt-3'>
                        <Link href={'/'}>Home /</Link>
                        <span>Forklift</span>
                    </div>
                </div>
            </div>


            {/* ===== hero bottom section === */}
            <div className='container mx-auto px-3 md:px-0 py-10'>
                <div className='flex items-start justify-center gap-2 md:gap-6 flex-wrap'>
                    <Link href={'#'} className='bg-bgYellow p-1 px-3 rounded-full '>Diesel Forklift</Link>
                    <Link href={'#'} className='bg-bgYellow p-1 px-3 rounded-full '>Electric Forklift</Link>
                    <Link href={'#'} className='bg-bgYellow p-1 px-3 rounded-full '>Lithium Powered Forklift</Link>
                    <Link href={'#'} className='bg-bgYellow p-1 px-3 rounded-full '>LPG Forklift</Link>
                    <Link href={'#'} className='bg-bgYellow p-1 px-3 rounded-full '>Specialized Forklift</Link>
                </div>

                <div className='mt-3'>

                    <p className='md:text-lg my-4'>Forklift is a small industrial vehicle, having a power operated forked platform attached at the front that can be raised and lowered for insertion under a cargo to lift or move it. Forklifts serve the needs of various industries including warehouses and other large storage facilities.</p>
                    <p className='my-4 md:text-lg'>Forklifts are powered by electric battery or combustion engines. Some Forklifts allow the operators to sit while driving and operating the machine while others require the operator to stand. It is being extensively used throughout the industry for transporting materials and goods.</p>

                </div>

                {/* === product list === */}
                <div className='py-16 flex flex-col items-start justify-center gap-10'>

                    <div className='md:flex md:gap-10 md:items-center md:justify-center'>
                        <Image width={320} height={320} src={product1} className='md:w-1/2'></Image>
                        <div>
                            <h1 className='md:text-3xl text-2xl mt-4 font-semibold'>7.0-10.0T Lithium Powered Electric Forklift</h1>
                            <p className='md:text-lg mt-3'>EFL Series releases a new generation, EFL702/1002 7.0/10.0Ton Li-ion electric forklift, to fill the vacancy of large ton and send […]</p>
                            <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase">more <FaArrowRight/> </button>
                        </div>
                    </div>


                    
                    <div className='md:flex md:gap-10 md:items-center md:justify-center'>
                        <Image width={320} height={320} src={product2} className='md:w-1/2'></Image>
                        <div>
                            <h1 className='md:text-3xl text-2xl mt-4 font-semibold'>LPG/Gasoline Forklift – 2.5T</h1>
                            <p className='md:text-lg mt-3'>Introduction EQUIPMAX 2.5T Cushion Tires LPG forklift adopts the newest technologies and ergonomic concepts in designing and manufacturing. The forklift […]</p>
                            <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase">more <FaArrowRight/> </button>
                        </div>
                    </div>


                    <div className='md:flex md:gap-10 md:items-center md:justify-center'>
                        <Image width={320} height={320} src={product3} className='md:w-1/2'></Image>
                        <div>
                            <h1 className='md:text-3xl text-2xl mt-4 font-semibold'>Telescopic Forklift 2WD/4WD – 2.5-4.0T</h1>
                            <p className='md:text-lg mt-3'>Introduction: The EQUIPMAX telescopic forklift (telehandler) adopts the latest technologies and ergonomic concepts in designing and manufacturing. The forklift with […]</p>
                            <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase">more <FaArrowRight/> </button>
                        </div>
                    </div>



                    <div className='md:flex md:gap-10 md:items-center md:justify-center'>
                        <Image width={320} height={320} src={product5} className='md:w-1/2'></Image>
                        <div>
                            <h1 className='md:text-3xl text-2xl mt-4 font-semibold'>1.5T Three Wheel Electric Forklift</h1>
                            <p className='md:text-lg mt-3'>EP introduces a compact and agile 3-wheel Li-ion forklift truck for the rapid turnover of goods in confined space with […]</p>
                            <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase">more <FaArrowRight/> </button>
                        </div>
                    </div>


                    <div className='md:flex md:gap-10 md:items-center md:justify-center'>
                        <Image width={320} height={320} src={product7} className='md:w-1/2'></Image>
                        <div>
                            <h1 className='md:text-3xl text-2xl mt-4 font-semibold'>1.5-3.5T Electric Forklift</h1>
                            <p className='md:text-lg mt-3'>These 4-wheel electric forklifts is ready to face some of the most difficult material handling tasks. Max-8 series is your […]</p>
                            <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase">more <FaArrowRight/> </button>
                        </div>
                    </div>


                    <div className='md:flex md:gap-10 md:items-center md:justify-center'>
                        <Image width={320} height={320} src={product4} className='md:w-1/2'></Image>
                        <div>
                            <h1 className='md:text-3xl text-2xl mt-4 font-semibold'>Stand-on VNA Three Way Forklift 1.0-1.5T</h1>
                            <p className='md:text-lg mt-3'>1.0-1.5T Stand-on VNA Three Way Forklift    </p>
                            <button class="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 font-semibold mt-4 flex items-center gap-2 uppercase">more <FaArrowRight/> </button>
                        </div>
                    </div>

                   


                   


                    

                   

                   

                </div>


                <div className='flex items-center'>
                   <Link href={'#'} className=' border border-gray-200 px-4 p-1 hover:bg-blue-900 duration-200 ease-in-out hover:text-white'>1</Link>
                   <Link href={'#'} className=' border border-gray-200 px-4 p-1 hover:bg-blue-900 duration-200 ease-in-out hover:text-white'>2</Link>
                   <Link href={'#'} className='flex items-center gap-2 border border-gray-200 px-4 p-1 hover:bg-blue-900 duration-200 ease-in-out hover:text-white'>Next Page <FaAnglesRight/> </Link>
                </div>



            </div>


        </>

    )
}

export default page
