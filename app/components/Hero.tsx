import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-100 px-4 lg:px-20 py-10">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Card */}
        <div className=" ">
          <div className="mt-6">
            <Image src="/Ads 1.png" alt="Hero Car" width={406} height={116} className="w-full" />
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 w-[465px]">
              {/* Pickup Section */}
              <div className="flex flex-col ">
                <h3 className="text-gray-600 font-medium mb-2">Pick-Up</h3>
                <div className="flex justify-between font-bold text-lg">
                    <h3>Locations</h3>
                    <h3>Date</h3>
                    <h3>Time</h3>
                </div>
                <div className="flex justify-between  text-gray-400 font-medium text-sm">

                  <select className=" py-2"> 
                
                    <option>Select your city</option>
                  </select>
                  <select className="  rounded-lg py-2">
                    <option>Select your city</option>
                  </select>
                  <select className=" py-2">
                    <option>Select your city</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}

        <div className="mt-6">
          <Image src="/Ads 2.png" alt="Hero Car Gray" width={406} height={116} className="w-full" />
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2  gap-4 ml-14 w-[465px]">
              {/* Pickup Section */}
              <div className="flex flex-col">
                <h3 className="text-gray-600 font-medium mb-2">Pick-Up</h3>
                <div className="flex justify-between font-bold text-lg">
                    <h3>Locations</h3>
                    <h3>Locations</h3>
                    <h3>Locations</h3>
                </div>
                <div className="flex justify-between  text-gray-400 font-medium text-sm">

                  <select className=" py-2"> 
                
                    <option>Select your city</option>
                  </select>
                  <select className="  rounded-lg py-2">
                    <option>Select your city</option>
                  </select>
                  <select className=" py-2">
                    <option>Select your city</option>
                  </select>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div>
        {/* Swap Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
            <i className="fas fa-exchange-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;