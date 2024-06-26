import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <>
        <section class="relative isolate overflow-hidden bg-white py-8 px-3 md:px-0">
            <h1 className='text-2xl md:text-4xl text-center font-semibold text-textHeadingColor'>Testimonials</h1>
  <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
  <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  <div class="mx-auto max-w-2xl lg:max-w-4xl">
    {/* <Image class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt=""/> */}
    <figure class="mt-5">
      <blockquote class="text-center font-semibold text-gray-900">
        <p className=' text-textNavColor'>“We just don't say but we do. We believe in action than word. We believe this is key to gain the trust and love from customer. Here are some comments from some of our valued clients.”</p>
      </blockquote>
      {/* <figcaption class="mt-10">
        <Image class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
          <div class="font-semibold text-gray-900">Judith Black</div>
          <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <div class="text-gray-600">CEO of Workcation</div>
        </div>
      </figcaption> */}
    </figure>
  </div>
</section>
    </>
  )
}

export default Testimonials
