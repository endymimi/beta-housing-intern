import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import dropdown from "../assets/arrow_drop_down_36dp_000000_FILL0_wght400_GRAD0_opsz40.svg";



import filterimage from "../assets/Vectorfilter.png";

import imagepage from "../assets/houseimagecoverimage.png";

const Navbar = () => {

  const [bedrooms, setBedrooms] = useState(0);
    const navigate = useNavigate();

    


  return (
    <>
    <main className='  bg-cover bg-center  bg-no-repeat relative  h-[500px]  md:h-[600px] lg:h-[600px]'>
    <div className=''>
        <img src={imagepage} alt="" />
    </div>
        <nav className="wrapper absolute text-white py-4 px-8 bottom-120 flex items-center justify-between  inset-0 my-8 ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-[#3D9970] w-10 h-10 rounded-full flex items-center justify-center font-bold text-[#0D1B39]">
          BH
        </div>
        <span className=" text-xl font-poppins font-[500]">BetaHouse</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 font-exo text-[#F5F5F5] cursor-pointer">
        <li className="hover:text-[#3D9970]">Home</li>
        <li className="hover:text-[#3D9970]">Properties</li>
        <li className="hover:text-[#3D9970]">About Us</li>
        <li className="hover:text-[#3D9970]">Blog</li>
        <li className="hover:text-[#3D9970]">Contact Us</li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        
        <Link
          to="/SignIn" className='px-5 py-2 border cursor-pointer border-white rounded-md hover:bg-white hover:text-[#0D1B39] transition'>
        Signin 
        </Link>
        
        
        <Link to="/SignUp"className='px-5 py-2 bg-[#3D9970] text-[#0D1B39] rounded-md hover:bg-[#38b2ac] transition'>
         Login
        </Link>
        
      </div>
      <div className="absolute top-30 text-white text-center left-42 my-10 font-outfit hidden md:block">
      <h1 className="text-4xl md:text-5xl tracking-wide font-[700] mb-4 mx-57">
        Browse Our Properties
      </h1>
      <p className="text-[15px] font-outfit tracking-widest my-2">
        Find your perfect home among our curated properties.Start
      </p>
      <p className="my-2"> browsing now!</p>

      <div className="bg-white hidden md:block  text-[#30343B] wrapper h-[77px] gap-6 py-8 items-center my-34  ">
        <div className=" flex flex-col md:flex-row items-end md:items-center gap-6">
        <div className="">
          <label className="uppercase flex items-center  text-xs font-bold mb-1">Location</label>
          <input
            type="text"
            placeholder="eg. Gbagada"
            className="border-b border-gray-300 outline-none py-1 text-[12px]"
          />
        </div>

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block h-10 border-r border-gray-300  gap-6"></div>

        {/* Property Type Input */}
        <div className=" gap-6 ">
          <label className="uppercase flex items-center text-[#30343B] text-xs font-bold mb-1">Property Type</label>
          <input
            type="text"
            placeholder="eg. Duplex, Bedroom Flat"
            className="border-b border-gray-300 outline-none py-1 text-[12px]"
          />
        </div>
         

        {/* Divider (hidden on small screens) */}
        <div className="hidden md:block h-10 border-r border-gray-300 mx-10"></div>

        {/* Bedroom Selector */}
        <div className=" flex flex-col ">
          <label className="uppercase text-xs font-bold mb-1 text-[#30343B]">Bedroom</label>
          <div className="flex items-center gap-3 ">
            <button
              onClick={() => setBedrooms(Math.max(0, bedrooms - 1))}
              className="text-lg px-2 text-[12px]"
            >
              −
            </button>
            <span>{bedrooms}</span>
            <button
              onClick={() => setBedrooms(bedrooms + 1)}
              className="text-lg px-2 text-[12px]"
            >
              +
            </button>

             
             
          
        
          </div>
          <div className="md:col-span-1 absolute left-180 top-63 ">
          <button className="bg-[#3D9970] text-white w-[293px] py-7 rounded-md cursor-pointer hover:bg-gray-600 transition">
            Find Property
          </button>
        </div>
           
        </div>

        
        
      </div>
       
      </div>
       
    </div>
   
  
    </nav> 
     <section>
      
      <div className="dropdown md:hidden mx-3 my-3">
  <div tabIndex="0" role="button" className="btn m-1 bg-[#3D9970] hover:bg-cyan-300">Find Property</div>
  <ul tabIndex="0" className="dropdown-content menu bg-gray-600  text-white  cursor-pointer rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Location</a></li>
    <li><a>Property type</a></li>
  </ul>
</div>
    <div className="wrapper my-15  md:my-5 flex gap-4 justify-between">
      <div className="flex gap-6">
      <img className="w-5 h-5" src={filterimage} alt="Filter-visual" />
      <h3>
        More Filter
      </h3>
      <h3>
        Showing 1-10 of 15 results 
      </h3>
      </div>
      <div className="flex">
        <h3>
          Sort by: Default 
        </h3>
        <div>
          <img className="w-6 h-6 flex" src={dropdown} alt="" />
        </div>
      </div>
    </div>  
    </section>
    </main>
     
    </>
  )
}

export default Navbar

