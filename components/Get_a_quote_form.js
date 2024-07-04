import React from 'react'

const GetAQuoteForm = () => {
    return (
        <div className=' py-5'>

            <form className='bg-navBg p-5 flex flex-col gap-5 rounded-md shadow md:w-1/2'>

                <div className='flex flex-col '>
                    <label htmlFor="name" className='text-white font-semibold mb-0.5'>Name</label>
                    <input id='name' type="text" placeholder='Name' className='p-2 rounded-sm outline-none font-medium w-full'  required/>
                </div>

                <div className='flex flex-col '>
                    <label htmlFor="email" className='text-white font-semibold mb-0.5'>Email</label>
                    <input id='email' type="email" placeholder='Email Address' className='p-2 rounded-sm outline-none font-medium w-full' required />
                </div>

                <div className='flex flex-col '>
                    <label htmlFor="message"  className='text-white font-semibold mb-0.5'>Message</label>
                    <textarea name=""  rows={6} id="message" className='p-2 rounded-sm outline-none font-medium w-full' placeholder='Message Us'></textarea>
                </div>

                <button className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border border-gray-500
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-navBg hover:text-white hover:duration-1000 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 capitalize font-semibold mt-4 w-fit" type='submit'>Submit</button>
                



            </form>

        </div>
    )
}

export default GetAQuoteForm
