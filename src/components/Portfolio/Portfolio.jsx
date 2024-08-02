import React from 'react'
import img1 from '/src/assets/poert1.png'
import img2 from '/src/assets/port2.png'
import img3 from '/src/assets/port3.png'

export default function Portfolio() {
  return (
    <>
      <div className="portfolio flex flex-col justify-center items-center min-h-screen bg-white mt-40">
        <div className="container flex flex-col justify-center items-center">
            <h2 className="uppercase text-[#2C3E50] text-5xl font-bold">
              portfolio component
            </h2>
            <div className="underline flex justify-center items-center my-5">
              <div className="line w-32 h-1 bg-[#2C3E50]"></div>
              <i className="fa-solid fa-star text-[#2C3E50] mx-5"></i>
              <div className="line w-32 h-1 bg-[#2C3E50]"></div>
            </div>
            <div className="grid grid-cols-3 gap-10 mb-5">
                <div className="col-span-1 relative border rounded-lg overflow-hidden">
                  <div className="layer flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                        <i className="fa-solid fa-plus text-white text-7xl"></i>
                  </div>
                  <img className='w-96' src={img1} />
                </div>
                <div className="col-span-1 relative border rounded-lg overflow-hidden">
                  <div className="layer flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                        <i className="fa-solid fa-plus text-white text-7xl"></i>
                  </div>
                  <img className='w-96' src={img2} />
                </div>
                <div className="col-span-1 relative border rounded-lg overflow-hidden">
                  <div className="layer flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                        <i className="fa-solid fa-plus text-white text-7xl"></i>
                  </div>
                  <img className='w-96' src={img3} />
                </div>
                <div className="col-span-1 relative border rounded-lg overflow-hidden">
                  <div className="layer flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                        <i className="fa-solid fa-plus text-white text-7xl"></i>
                  </div>
                  <img className='w-96' src={img1} />
                </div>
                <div className="col-span-1 relative border rounded-lg overflow-hidden">
                  <div className="layer flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                        <i className="fa-solid fa-plus text-white text-7xl"></i>
                  </div>
                  <img className='w-96' src={img2} />
                </div>
                <div className="col-span-1 relative border rounded-lg overflow-hidden">
                  <div className="layer flex justify-center items-center absolute top-0 bottom-0 right-0 left-0">
                        <i className="fa-solid fa-plus text-white text-7xl"></i>
                  </div>
                  <img className='w-96' src={img3} />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
