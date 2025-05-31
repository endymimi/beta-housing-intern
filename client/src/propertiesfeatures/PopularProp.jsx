
import React from 'react'
import arrowleft from "../assets/arrowleft.png";
import arrowright from "../assets/arrowright.png";
import { MdLocationOn } from "react-icons/md";




const PopularProp = () => {
 
 
 
  return (
    <>
    <main className='p-6 bg-white'>
      <div className=''>
        <h1 className='text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 font-outfit '>
          Discover Our Popular Properties
        </h1>
        </div>
        



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 container  mx-auto px-8 overflow-hidden">
  <div className=" relative">
    <img className='w-full h-auto object-cover'
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388760/houseimage10_gy4koe.png"
      alt="House-Image" />
      <div className='absolute text-white bottom-15 left-5 font-outfit  shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Semi Detached Duplex</h3>
        <h4 className='text-xl font-semibold'>₦ 1,430,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px] my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
           <div>
          <img className='absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6' src={arrowleft}  alt="arrow-icon" />
        </div>
        </div>
        
      </div>
  </div>
  <div className="relative">
    <img className='w-full h-auto object-cover'
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388760/houseimage11_bnuu5s.png"
      alt="House-Image" />
      <div className='absolute text-white bottom-15 left-5 font-outfit shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Special Duplex</h3>
        <h4 className='text-xl font-semibold'>₦ 670,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px] text-sm my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
        </div>
      </div>
  </div>
  <div className=" relative">
    <img className='w-full h-auto object-cover'
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388759/houseimage12_pvtnmy.png"
      alt="House-Image" />
      <div className='absolute text-white bottom-15 left-5 font-outfit shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Split-Level House</h3>
        <h4 className='text-xl font-semibold'>₦ 340,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px]  my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
        </div>
      </div>
  </div>
  <div className=" relative">
    <img className='w-full h-auto object-cover'
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388759/houseimge13_npzur6.png"
      alt="House-Image" />
       <div className='absolute text-white bottom-15 left-5 font-outfit shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Twin Duplex</h3>
        <h4 className='text-xl font-semibold'>₦ 290,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px] my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
        </div>
        <div>
        <img className='absolute right-10 top-1/2 transform -translate-y-1/2 w-6 h-6' src={arrowright} alt="arrow-icon" />
      </div>
      </div>
      
  </div>
  
  
</div>
    </main>
    </>
  )
}

export default PopularProp