import React from 'react'
import avatarImage from '/src/assets/avataaars.svg'

export default function Home() {
  return (
    <>
        <div className="home flex flex-col justify-center items-center min-h-screen bg-[#1ABC9C]">
          <img src={avatarImage} className='w-64' alt="" />
          <h2 className="uppercase text-white text-5xl font-bold">
            start framework
          </h2>
          <div className="underline flex justify-center items-center my-5">
            <div className="line w-32 h-1 bg-white"></div>
            <i className="fa-solid fa-star text-white mx-5"></i>
            <div className="line w-32 h-1 bg-white"></div>
          </div>
          <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
