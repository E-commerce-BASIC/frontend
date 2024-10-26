import Image from "next/image";
import React from "react";

export default function Subcategory({ productItem }) {
  return (
    <a  href={`/products/id?search=${productItem?.id}`} className="relative w-full py-5 flex justify-center">
      <div className="flex flex-wrap justify-center "> {/* Added space-x-4 for horizontal spacing */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl flex flex-col items-center border-2 border-gray-300 hover:border-gray-400 transition ease-in-out duration-200 hover:scale-105 w-auto">
          <div className="flex justify-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_API}/uploads/${encodeURIComponent(productItem.image)}`}
              alt={productItem.name}
              className="w-20 h-20 object-cover rounded-lg"
              width={160}  // Adjusted width for better display
              height={160} // Adjusted height 
              for better display
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">{productItem.name}</h3>
            <p className="text-sm text-gray-500">Price: ${productItem.price}</p>
          </div>
        </div>
        {/* Add more product items here as needed */}
      </div>
    </a>
  );
}
