// import Image from 'next/image';
import React from 'react';

export default function Smart_Phone() {
  return (
    <div className="px-4 bg-gray-100 min-h-screen">
      <div className="flex gap-2">

        <div className="left_Div w-1/4 bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Smart Phone</h1>
          <p className="text-gray-600 mb-2">Hello World</p>
          <p className="text-gray-600">Hello World</p>
        </div>

        <div className="right_Div w-full bg-white px-2 py-12 rounded-lg shadow-md flex gap-1 ">
          <div className="flex justify-center items-center">
            <img className='w-[150px] cursor-pointer' src="/watch.png" alt="Logo" />
          </div>
          <div className=''>
            <p className="text-lg font-medium text-gray-800">
              JBL Quantum 300 - Wired Over-Ear Gaming Headphones with JBL Quantum Engine Software - Black, Large
            </p>
            <p className="text-gray-500">1K+ bought in past month</p>

            <button className=" bg-red-500 text-white rounded-full py-2 px-4 hover-text-bold hover:bg-red-600 hover:transition duration-300 ease-in-out hover:scale-[1.05]">
              See Options
            </button>

            <p className="my-2 text-gray-500">No featured offers available</p>

            <p className=" text-xl font-semibold text-gray-900 ">
              $39.95 <span className="text-sm text-gray-500">(5 used & new offers)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
