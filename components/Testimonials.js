import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='py-20'>
        <section class="relative isolate overflow-hidden bg-white py-12 px-3 md:px-0">
            <h1 className='text-2xl md:text-4xl text-center font-semibold text-textHeadingColor'>Testimonials</h1>
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    <figure class="mt-5">
      <blockquote class="text-center font-semibold text-gray-900">
        <p className='text-sm'>“We just don't say but we do. We believe in action than word. We believe this is key to gain the trust and love from customer. Here are some comments from some of our valued clients.”</p>
      </blockquote>
     
    </figure>
  </div>
</section>
    </div>
  )
}

export default Testimonials
