import React from 'react'
import arrowleft from "../assets/arrowleft.png";
import arrowright from "../assets/arrowright.png";
import { MdLocationOn } from "react-icons/md";




const PopularProp = () => {
 
 
 
  return (
    <>
    <main className='bg-white'>
      <div>
        <h1 className='md:my-20 text-center my-6 font-outfit md:text-[50px] text-[22px] text-[#0F1A1E] font-[600]'>
          Discover Our Popular Properties
        </h1>
        </div>
        



        <div className="carousel rounded-box wrapper gap-3">
  <div className="carousel-item relative">
    <img
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388760/houseimage10_gy4koe.png"
      alt="House-Image" />
      <div className='absolute text-white top-73 left-5 font-outfit shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Semi Detached Duplex</h3>
        <h4 className='text-xl font-semibold'>₦ 1,430,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px] my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
           <div>
          <img className='absolute -ml-60 bottom-40 ' src={arrowleft} alt="arrow-icon" />
        </div>
        </div>
        
      </div>
  </div>
  <div className="carousel-item relative">
    <img
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388760/houseimage11_bnuu5s.png"
      alt="House-Image" />
      <div className='absolute text-white top-73 left-5 font-outfit shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Special Duplex</h3>
        <h4 className='text-xl font-semibold'>₦ 670,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px] text-sm my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
        </div>
      </div>
  </div>
  <div className="carousel-item relative">
    <img
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388759/houseimage12_pvtnmy.png"
      alt="House-Image" />
      <div className='absolute text-white top-73 left-5 font-outfit shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Split-Level House</h3>
        <h4 className='text-xl font-semibold'>₦ 340,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px]  my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
        </div>
      </div>
  </div>
  <div className="carousel-item relative">
    <img
      src="https://res.cloudinary.com/ds0a0s3k3/image/upload/v1748388759/houseimge13_npzur6.png"
      alt="House-Image" />
       <div className='absolute text-white top-73 left-5 font-outfit shadow-md tracking-widest'>
        <h3 className='text-xl font-semibold'>Twin Duplex</h3>
        <h4 className='text-xl font-semibold'>₦ 290,000,000</h4>
        <p className='text-[#FFFFFF] text-[14.79px]'>6 Bed | 3 Bath | 720 sqft </p>
        <div className='flex items-center text-[#FFFFFF] text-[14.79px] my-1'>
           <MdLocationOn className="mr-1" /> Victoria island,Lagos.
        </div>
        <div>
        <img className='absolute bottom-38 ml-60' src={arrowright} alt="arrow-icon" />
      </div>
      </div>
      
  </div>
  
  
</div>
    </main>
    </>
  )
}

export default PopularProp