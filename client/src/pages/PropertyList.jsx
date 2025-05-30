import React from 'react'
import { FaBed, FaBath, FaShareAlt, FaHeart } from "react-icons/fa";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { MdLocationOn } from "react-icons/md";


import { properties } from '../properties.js';




const PropertyList = () => {

  return (
    <>
    <main className='bg-white font-outfit'>
       <div className=" wrapper md:-mt-0 -mt-40">
      
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:my-25 p-4 md:p-0">
        {properties.map((property) => (
          
          <div
            key={property.id}
            className="bg-white rounded-lg overflow-hidden shadow-md "
          >
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover text-[#444444]"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                {property.featured && (
                  <span className="bg-[#3D9970] text-white text-xs px-2 py-1 rounded">
                    Featured
                  </span>
                )}
                <span className="bg-[#9e9999b2] text-white text-xs px-2 py-1 rounded mx-30">
                  For {property.for}
                </span>
              </div>
              {/* Action Icons */}
              <div className="absolute bottom-2 right-2 flex gap-2 text-white text-lg">
                <div className="bg-black/50 p-1 rounded">
                  <HiOutlineArrowsRightLeft />
                </div>
                <div className="bg-black/50 p-1 rounded">
                  <FaShareAlt />
                </div>
                <div className="bg-black/50 p-1 rounded">
                  <FaHeart />
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <div className="flex items-center text-gray-500 text-sm my-1">
                <MdLocationOn className="mr-1" />
                {property.location}
              </div>

              <div className="flex items-center text-sm text-gray-700 gap-4 my-2">
                <span className="flex items-center gap-1">
                  <FaBed /> {property.bedrooms} Bedrooms
                </span>
                <span className="flex items-center gap-1">
                  <FaBath /> {property.bathrooms} Bathrooms
                </span>
              </div>

              <div className="font-semibold text-black text-base mt-2">
                {property.price}
              </div>
              
            </div>
          </div>
          
        ))}
      </div>
    </div>
    <div className="flex justify-center ">
          <nav className="flex items-center space-x-2 text-sm  ">
            <button className="px-3 py-1 rounded border">&#8592;</button>
            <button className="px-3 py-1 bg-[#3D9970] text-white rounded">1</button>
            <button className="px-3 py-1 rounded border">2</button>
            <button className="px-3 py-1 rounded border">3</button>
            <button className="px-3 py-1 rounded border">4</button>
            <button className="px-3 py-1 rounded border">&#8594;</button>
          </nav>
        </div>
    </main>
    </>
  );
};

export default PropertyList
