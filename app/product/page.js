'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';


import Product_Details from '@/components/Product_Details';
import GetAQuoteForm from '@/components/Get_a_quote_form';
import ProductExplore from '@/components/ProductExplore';


// === icons ===
import { TiWorld } from "react-icons/ti";
import { FaNoteSticky } from "react-icons/fa6";
import Product from '@/components/Product';
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";


// ==== image == 
import product1 from './../../public/Image/Product review/Explore Product/ep1.png'
import product2 from './../../public/Image/products/p5.jpg'



const page = () => {


    const text = <Product_Details />

    const [content, setContent] = useState(text);
    const [isCategory, setIsCategory] = useState(false);
    const [dropdown, setDropdown] = useState(null)

    const image = [product1, product2]

    const [isPicture, setIsPicture] = useState(image[0])





    const handleProductButton = (tabname) => {
        setContent(text)
    }

    const handleQuoteButton = () => {
        setContent(<GetAQuoteForm />)
    }

    const handleProductCategory = (tabname) => {
        setIsCategory(!isCategory)
        setDropdown(tabname)
    }
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

                {/* <div className='md:hidden flex items-center justify-center gap-2 border border-gray-300 w-fit p-2 rounded-md text-right font-medium'> <AiOutlineBars className='font-semibold text-base'/> Product Category</div> */}

                {/* <div className='md:flex md:justify-between'>


                    <div className='w-[20]'>
                        <div className='md:flex md:gap-10'>
                            <div className=' md:flex flex-col gap-6 hidden'>
                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(1)} className='flex items-center justify-between'>
                                        <h1>Rental Equipment</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 1 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>


                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(2)} className='flex items-center justify-between'>
                                        <h1>Engine Parts</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 2 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>



                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(3)} className='flex items-center justify-between'>
                                        <h1>Filters</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 3 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>



                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(4)} className='flex items-center justify-between'>
                                        <h1>Hydraulic parts</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 4 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>



                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(5)} className='flex items-center justify-between'>
                                        <h1>Transmission Parts</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 5 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>


                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(6)} className='flex items-center justify-between'>
                                        <h1>Brakes parts</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 6 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>


                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(7)} className='flex items-center justify-between'>
                                        <h1>Electric Parts</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 7 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>


                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(8)} className='flex items-center justify-between'>
                                        <h1>Seal kits</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 8 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>


                                <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                    <div onClick={() => handleProductCategory(9)} className='flex items-center justify-between'>
                                        <h1>Drive Parts</h1>
                                        <FaAngleDown />
                                    </div>

                                    <div>
                                        {
                                            dropdown == 9 && (
                                                isCategory && (
                                                    <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                        <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                    </div>
                                                )
                                            )

                                        }
                                    </div>
                                </div>






                            </div>

                        </div>
                    </div>


                    <div className='md:w-1/3 w-full'>

                       <div>
                        <Image width={500} height={500} className='object-cover relative w-80 h-80 mx-auto ' src={isPicture} />

                       
                       </div>

                       <div  className='flex items-center justify-center gap-6 object-cover'>
                           {image.map((img, index) => (
                           <div key={index} className='flex w-28 object-cover'>
                             <Image onClick={() => setIsPicture(img)} width={10} height={10} className='object-cover w-full' layout='responsive' src={img} />
                           </div>
                           ))}
                        </div>

                    </div>


                    <div className='md:w-1/3 w-full'>
                        <h1>1.5-3.5T Electric Forklift</h1>
                        <p>Max-8 series can be applied in heavy loads (up to 3,5t), such as beverage industry and building materials.</p>
                    </div>
                </div> */}




                <div>

                    <div className='md:flex md:gap-10'>
                        <div className='md:w-1/4 md:flex flex-col gap-6 hidden'>
                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(1)} className='flex items-center justify-between'>
                                    <h1>Rental Equipment</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 1 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>


                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(2)} className='flex items-center justify-between'>
                                    <h1>Engine Parts</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 2 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>



                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(3)} className='flex items-center justify-between'>
                                    <h1>Filters</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 3 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>



                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(4)} className='flex items-center justify-between'>
                                    <h1>Hydraulic parts</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 4 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>



                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(5)} className='flex items-center justify-between'>
                                    <h1>Transmission Parts</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 5 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>


                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(6)} className='flex items-center justify-between'>
                                    <h1>Brakes parts</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 6 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>


                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(7)} className='flex items-center justify-between'>
                                    <h1>Electric Parts</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 7 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>


                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(8)} className='flex items-center justify-between'>
                                    <h1>Seal kits</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 8 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>


                            <div className='md:flex flex-col relative justify-between border-b border-gray-300 pb-2 cursor-pointer font-medium'>
                                <div onClick={() => handleProductCategory(9)} className='flex items-center justify-between'>
                                    <h1>Drive Parts</h1>
                                    <FaAngleDown />
                                </div>

                                <div>
                                    {
                                        dropdown == 9 && (
                                            isCategory && (
                                                <div className='flex flex-col bg-gray-200 rounded-md gap-3 p-1 mt-2'>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Forklift</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>excavator</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Wheel loader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>payloader</Link>
                                                    <Link href={'#'} className='hover:bg-gray-300 p-1'>Road Roller</Link>
                                                </div>
                                            )
                                        )

                                    }
                                </div>
                            </div>






                        </div>


                       <div>
                       <div className='md:flex md:justify-between gap-5'>
                            <div className=' w-4/5 mx-auto md:w-[35%]'>

                                <Product />

                            </div>


                            <div className='md:w-1/2'>
                                <h1 className='text-3xl font-semibold mt-5 md:mt-0 mb-5'>1.5-3.5T Electric Forklift</h1>
                                <p className='text-lg'>Max-8 series can be applied in heavy loads (up to 3,5t), such as beverage industry and building materials.</p>

                            </div>
                        </div>


                        <div>
                    <div className='flex gap-4 mt-10'>
                        <button onClick={() => handleProductButton("Details")} className="relative px-3 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 capitalize font-semibold flex items-center justify-center gap-2"> <TiWorld />  Product Details  </button>

                        <button onClick={() => handleQuoteButton('quote')} className="relative px-3 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 capitalize font-semibold flex items-center justify-between gap-2"> <FaNoteSticky /> Get A Quote</button>
                    </div>


                    <div>
                        <div className='mt-7 md:text-lg'>{content}</div>
                    </div>


                </div>


                       </div>



                    </div>


                </div>



              


            </div>


            {/* ==== explore product ====  */}
            <div className='container mx-auto py-20 px-3 md:px-0'>

                <h1 className='text-2xl font-semibold'>Explore More Product</h1>

                <div className='mt-3 opacity-100'>
                    <ProductExplore />

                </div>

            </div>

        </>
    )
}

export default page
