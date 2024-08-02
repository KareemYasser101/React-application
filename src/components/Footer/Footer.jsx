import React from 'react'

export default function Footer() {
  return (
    <>
        <div className="info text-white">
          <div className="container py-28 bg-[#2C3E50] grid grid-cols-3">
            <div className="loc col-span-1 flex flex-col justify-between items-center">
              <h3 className='text-3xl font-bold'>LOCATION</h3>
              <span className='my-3'>2215 John Daniel Drive</span>
              <span>Clark, MO 65243</span>
            </div>
            <div className="social col-span-1 flex flex-col justify-center items-center">
              <h3 className='text-3xl font-bold'>AROUND THE WEB</h3>
              <div className="social-icons flex my-4 gap-2">
                <div className="icon flex items-center justify-center bg-transparent w-10 h-10 border border-white rounded-full">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="icon flex items-center justify-center bg-transparent w-10 h-10 border border-white rounded-full">
                  <i className='fa-brands fa-twitter'></i>
                </div>
                <div className="icon flex items-center justify-center bg-transparent w-10 h-10 border border-white rounded-full">
                  <i className='fa-brands fa-linkedin'></i>
                </div>
                <div className="icon flex items-center justify-center bg-transparent w-10 h-10 border border-white rounded-full">
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className="freelance col-span-1 flex flex-col justify-center items-center text-center">
              <h3 className='text-3xl font-bold'>ABOUT FREELANCER</h3>
              <p className='my-3'>Freelance is a free to use, licensed Bootstrap <br /> theme created by Route</p>
            </div>
          </div>
          <div className="copy-right flex justify-center items-center bg-[#1A252F] py-8">
              <p>Copyright © Your Website 2021</p>
          </div>
        </div>
    </>
  )
}
