import React from 'react'
import Link from 'next/link'
import Product from '@/src/components/product/Product'


// === icons ===
import { TiWorld } from "react-icons/ti";
import { FaNoteSticky } from "react-icons/fa6";
import ProductExplore from '@/src/components/ProductExplore/ProductExplore';

const page = () => {
    return (
        <>

            <div className=' productImageCover py-12 md:py-28'>


                <div className=' container mx-auto px-3 md:px-0'>
                    <h1 className='text-white font-semibold md:text-4xl text-3xl'>1.5-2.0T Electric Forklift</h1>
                    <div className='text-white  mt-3'>
                        <Link href={'/'}>Home /</Link>
                        <span>Product Details</span>
                    </div>
                </div>
            </div>

            {/* ==== product review ====  */}

            <div className='container mx-auto py-10 px-3 md:px-0 '>

                <div className='md:flex md:gap-10'>
                    <div className=' w-4/5 mx-auto md:w-[35%]'>

                        <Product />

                    </div>


                    <div className='md:w-1/2'>
                        <h1 className='text-3xl font-semibold mt-5 md:mt-0 mb-5'>1.5-3.5T Electric Forklift</h1>
                        <p>Max-8 series can be applied in heavy loads (up to 3,5t), such as beverage industry and building materials.</p>
                    </div>
                </div>


                <div>
                    <div className='flex gap-4 mt-5'>
                        <button class="relative px-3 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 capitalize font-semibold flex items-center justify-center gap-2"> <TiWorld/>  Product Details  </button>

                        <button class="relative px-3 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 capitalize font-semibold flex items-center justify-between gap-2"> <FaNoteSticky/> Get A Quote</button>
                    </div>

                    <div>
                        <p className='mt-4 md:text-lg'>These 4-wheel electric forklifts is ready to face some of the most difficult material handling tasks. Max-8 series is your multipurpose workhorse that supplies great power, easy operation and leading performance to be the best solution for whatever you are lifting.</p>
                    </div>

                </div>


            </div>


            {/* ==== explore product ====  */}
            <div className='container mx-auto py-6 px-3 md:px-0'>

                <h1 className='text-2xl font-semibold'>Explore More Product</h1>

                <div className='mt-3 opacity-100'>
                    <ProductExplore/>

                </div>

            </div>

        </>
    )
}

export default page
