import React from 'react'

export default function Contact() {
  return (
    <>
        <div className="contact flex flex-col justify-center items-center min-h-screen bg-white mt-30">
        <div className="container flex flex-col justify-center items-center">
            <h2 className="uppercase text-[#2C3E50] text-5xl font-bold">
              contact component
            </h2>
            <div className="underline flex justify-center items-center my-5">
              <div className="line w-32 h-1 bg-[#2C3E50]"></div>
              <i className="fa-solid fa-star text-[#2C3E50] mx-5"></i>
              <div className="line w-32 h-1 bg-[#2C3E50]"></div>
            </div>
            <form className='flex flex-col justify-between items-start gap-7 w-[800px]'>
                <input type="text" class="block w-full px-4 py-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none" placeholder='userName' />
                <input type="text" class="block w-full px-4 py-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none" placeholder='userAge' />
                <input type="email" class="block w-full px-4 py-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none" placeholder='userEmail' />
                <input type="password" class="block w-full px-4 py-2 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none" placeholder='userPassword' />
                <button className='px-4 py-2 bg-[#1ABC9C] border-none rounded-lg text-white'>Send Message</button>
            </form>
        </div>
      </div>
    </>
  );
}
