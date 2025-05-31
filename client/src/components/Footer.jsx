import React from 'react'
import { MdLocationOn } from "react-icons/md";
import vectortel from "../assets/Vectortel.png";
import vectormail from "../assets/Vectormail.png";




const Footer = () => {
  
  
  
    return (
    <>
    <main className='bg-[#035A33]  w-[1440px]  md:h-[500px] lg:h-[500px] md:mt-20 mt-10 '>
    <div>
     <footer className="footer sm:footer-horizontal container text-white   ">
  <nav className='px-5 pr-8'>
    <div className='flex items-center gap-2 mr-5 '>
      <div className="footer-title  bg-[#3D9970] my-8 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white">
        BH
      </div>
      <span className=" text-xl font-poppins font-[500] mt-7">BetaHouse</span>
    </div>
    
    <p>Discover, rent, and find your ideal home hassle-free </p>
    <p className='hidden md:block'>with BetaHouse. Take control of your Rental journey today!</p>
    <p className='md:hidden '>with BetaHouse. Take control of your Rental journey</p>
    <p className='md:hidden'>today!</p>
    <div className='flex items-center text-white text-[14.79px] my-1'>
               <MdLocationOn className="mr-3 my-3" /> 95,Tinubu Estate,Lekki,Lagos.
               </div>
               <div className='flex items-center text-white text-[14.79px] my-1'>
               <img className='mr-3' src={vectortel} alt="" /> +234 675 8935 675
               </div>
               <div className='flex items-center text-white text-[14.79px] my-1'>
                <img className='mr-3 my-3 ' src={vectormail} alt="" /> 95,Tinubu Estate,Lekki,Lagos.
               </div>
    
    
    
   
  </nav>
  <nav className='md:ml-0 ml-6'>
    <h6 className="footer-title my-10 text-white ">Quick Links</h6>
    <a className="my-1 ">Home</a>
    <a className="">Properties</a>
    <a className="my-3">About</a>
    <a className="">Contact Us</a>
    <a className="my-3">Blog</a>
  </nav>
  <nav className='md:ml-0 ml-6'>
    <h6 className="footer-title my-10">More</h6>
    <a className="my-1">Agents</a>
    <a className="">Affordable Houses</a>
    <a className="my-3">FAQ's</a>
  </nav>
    <nav className='md:ml-0 ml-6'>
    <h6 className="footer-title my-10">Popular Search</h6>
    <a className="my-1">Apartment For Sale</a>
    <a className="">Apartment For Rent</a>
    <a className="my-3">3 Bedroom Flat</a>
    <a className="">Bungalow</a>
  </nav>
  
</footer>
    </div>
    <div className='border-b border-white my-15'></div>
    <div className='text-white container md:flex justify-between '>
      <p className='md:ml-6 hidden md:block'>Copyright 2023 BetaHouse | Designed by Michael.fig</p>
      <p className='md:-mr-130 hidden md:block'>Privacy Policy</p>

      <div className='ml-7'>
        <p className='md:hidden '>Copyright 2023 BetaHouse </p>
      <p className='md:hidden'>Designed by Michael.fig</p>
      <p className='md:hidden'>Privacy Policy</p>
      </div>
    </div>
    </main>
    </>
  )
}

export default Footer