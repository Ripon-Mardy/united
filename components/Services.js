import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// == images === 
import service1 from './../public/Image/services/s1.jpg'
import service2 from './../public/Image/services/s2.jpg'
import service3 from './../public/Image/services/s3.png'
import service4 from './../public/Image/services/s4.png'
import service5 from './../public/Image/services/s5.png'

const Services = () => {
  return (
    <div className=' px-3 md:px-0 py-16 bg-sectionBg'>

        <div className='container mx-auto'>

           <div>
           <h1 className='text-center md:text-4xl text-3xl font-semibold text-textHeadingColor'>Our Services</h1>
           <p className='text-center text-textNavColor font-semibold text-sm md:text-lg mt-3'>Our service covers the below segments as shown below -</p>
           </div>

           <div className='md:grid md:grid-cols-4 grid-cols-1 grid gap-10 mt-10 w-full flex-1'>
            <Link href={'#'} className='bg-white p-2 py-4 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
                <Image src={service1} width={330} height={330} className='mx-auto'></Image>
                <h1 className='text-2xl font-semibold mt-2'>Spare Parts</h1>
            </Link>

            <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
                <Image src={service2} width={330} height={330} className='mx-auto'></Image>
                <h1 className='text-2xl font-semibold mt-2'>Equipment</h1>
            </Link>

            <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
                <Image src={service3} width={330} height={330} className='mx-auto'></Image>
                <h1 className='text-2xl font-semibold mt-2'> Maintenance Servicing</h1>
            </Link>

            <Link href={'#'} className='bg-white  py-4 p-2 rounded-md text-center hover:shadow-md duration-200 ease-in-out w-full border-b-2 hover:border-hoverborder inline-block'>
                <Image src={service4} width={330} height={330} className='mx-auto object-cover'></Image>
                <h1 className='text-2xl font-semibold mt-2'>
                Racking System </h1>
            </Link>


           </div>



        </div>
      
    </div>
  )
}

export default Services
