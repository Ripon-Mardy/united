import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// == images === 
import product1 from './../../public/Image/products/p1.png'
import product2 from './../../public/Image/products/p2.jpg'
import product3 from './../../public/Image/products/p3.jpg'
import product4 from './../../public/Image/products/p4.png'
import product5 from './../../public/Image/products/p5.jpg'
import product6 from './../../public/Image/products/p6.png'
import product7 from './../../public/Image/products/p7.png'
import product8 from './../../public/Image/products/p8.jpeg'

const Products = () => {
  return (
    <div className=' px-3 md:px-0 py-16 bg-productBg'>

    <div className='container mx-auto'>

       <div>
       <h1 className='text-center md:text-4xl text-3xl font-semibold text-textHeadingColor'>Featured Products</h1>
       {/* <p className='text-center text-textNavColor font-semibold text-sm md:text-lg mt-3'>Our service covers the below segments as shown below -</p> */}
       </div>

       <div className='md:grid md:grid-cols-4 grid-cols-1 grid gap-10 mt-10'>
        <Link href={'/product-category'} className='bg-white p-2 py-4 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
            <Image src={product1} width={330} height={330} className='mx-auto'></Image>
            <h1 className='text-2xl font-semibold mt-2'>Traction Batteries</h1>
        </Link>

        <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
            <Image src={product2} width={330} height={330} className='mx-auto'></Image>
            <h1 className='text-2xl font-semibold mt-2'>Stacker/Reach Truck Wheel</h1>
        </Link>


        <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
            <Image src={product4} width={330} height={330} className='mx-auto'></Image>
            <h1 className='text-2xl font-semibold mt-2'>3.0-12.0T Multi Directional (Side Loader) Forklift</h1>
        </Link>

        <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
            <Image src={product5} width={330} height={330} className='mx-auto'></Image>
            <h1 className='text-2xl font-semibold mt-2'>1.6T Very Narrow Aisle Man Up Turret Truck</h1>
        </Link>

        <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
            <Image src={product6} width={330} height={330} className='mx-auto'></Image>
            <h1 className='text-2xl font-semibold mt-2'>Wheel Rim</h1>
        </Link>

        <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
            <Image src={product7} width={330} height={330} className='mx-auto'></Image>
            <h1 className='text-2xl font-semibold mt-2'>Solid Tire</h1>
        </Link>

        <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
            <Image src={product8} width={330} height={330} className='mx-auto'></Image>
            <h1 className='text-2xl font-semibold mt-2'>1.5-2.5T Articulated VNA Forklift</h1>
        </Link>

       </div>



    </div>
  
</div>
  )
}

export default Products
