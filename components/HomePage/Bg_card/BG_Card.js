import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
export default function BG_Card() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/category"); // Update with the correct endpoint
        setCategories(response.data.data); // Access the correct data
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  // console.log(Categories);
  return (
    <div>
      <div className="bgimg_card container  relative z-10  mx-auto p-4 mt-80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Categories?.map((x, i) => {
            const firstTwo = x.products.slice(0, 2);
            const lastTwo = x.products.slice(2);
            return (
              <div
              key={i}
                onClick={() => console.log(x)}
                className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-96"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{x.category}</h3>
                  <div className="flex justify-center mt-2 space-x-4">
                    {firstTwo.map((product, p1) => {
                      return (
                        <a key={p1} href={`/products/${product.id}`}>
                         <Image
                            src="https://cdn.pixabay.com/photo/2014/05/21/13/25/shopping-cart-349544_640.png"
                            alt="Image 1"
                            className="w-24 h-24 sm:w-32 sm:h-32 p-2 rounded-lg"
                            height={100}
                            width={100}
                          />
                          <p className="text-center">{product.name}</p>
                        </a>
                      );
                    })}
                  </div>
                  <div className="flex justify-center mt-2 space-x-4">
                    {lastTwo.map((product, p1) => {
                      return (
                        <a key={p1} href={`/products/${product.id}`}>
                         <Image
                            src="https://cdn.pixabay.com/photo/2014/05/21/13/25/shopping-cart-349544_640.png"
                            alt="Image 1"
                            className="w-24 h-24 sm:w-32 sm:h-32 p-2 rounded-lg"
                            height={100}
                            width={100}
                          />
                          <p className="text-center">{product.name}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="p-4 text-center">
                  <Link
                    href={`category/${x?.category}`}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
