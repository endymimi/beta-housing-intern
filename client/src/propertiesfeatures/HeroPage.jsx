import React from "react";
import { useState } from "react";




const HeroPage = () => {
  
  
    const [isBeds, setIsBeds] = useState(0);
  const increaseBeds = () => setIsBeds((prev) => prev + 1);
  
  const decreaseBeds = () => {

    if (isBeds > 0) setIsBeds((prev) => prev - 1);
     };

  
  
  return (
    <section className="container py-9 px-3">
      <div className="text-center mb-10">
        <h1 className="font-outfit text-3xl md:text-5xl lg:text-[68px] leading-tight font-bold ">
          Browse Our Properties
        </h1>
        <p className=" md:text-xl lg:text-[26px] leading-loose mt-4 text-xl text-[#FFFFFF]">
          Find your perfect home among our curated properties.
        </p>
        <p className=" md:text-xl lg:text-[26px] text-xl leading-loose mt-4 text-[#FFFFFF]"> Start browsing now!</p>
      </div>
 
        <main className="p-5">

        <div className="flex flex-wrap md:flex-nowrap bg-white my-15 rounded-lg  overflow-hidden max-w-6xl mx-auto">
        
        <div className="md:flex hidden flex-col justify-center p-4 border-b md:border-b-0 md:border-r w-full md:w-1/3">
          <label className="text-xs font-semibold uppercase text-gray-500 mb-1">location</label>
          <input
            type="text"
            placeholder="eg. Gbagada"
            className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
        </div>

        <div className="flex flex-col justify-center p-4 border-b md:border-b-0 md:border-r w-full md:w-1/3">
          <label className="text-xs font-semibold uppercase text-gray-500 mb-1">property type</label>
          <input
            type="text"
            placeholder="eg. Duplex, Bedroom Flat"
            className="outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
            />
        </div>
        <div className="flex flex-col justify-center p-4 border-b md:border-b-0 md:border-r w-full md:w-1/3">
          <label className="text-xs font-semibold text-gray-500 uppercase mb-1">Bedroom</label>
          <div className="flex items-center space-x-4 mt-1">
            <button
              onClick={decreaseBeds}
              className="text-lg font-bold w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full"
              >
              -
            </button>
            <span className="text-black">{isBeds}</span>
            <button
              onClick={increaseBeds}
              className="text-lg font-bold w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full"
              >
              +
            </button>
          </div>
        </div>
        
          <button className="bg-[#3D9970] text-white font-[400] px-8 py-2 text-sm rounded-md hover:bg-green-700 transition w-full md:w-auto ">
            Find Property
          </button>
        
      </div>
      </main>
    </section>
  );
};

export default HeroPage;