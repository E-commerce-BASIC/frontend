import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
export default function BG_Card() {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const response = await axios.get("/api/category"); // Update with the correct endpoint
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_API}/category/all_product`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(data)
        setCategories(data.categories); // Access the correct data
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
 
  
  return (
    <div className="bgimg_card my-10 mx-auto container py-5 px-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Categories.map((x, i) => (
          <div
            key={i}
            onClick={() => console.log(x)}
            className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-96 hover:transition ease-in-out duration-100 hover:scale-[1.02]"
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold">{x.category}</h3>
              <div className="flex justify-center flex-wrap">
                {x?.products?.map((product, pIndex) => (
                  <a
                    key={pIndex}
                    href={`/products/id?search=${product.id}`}
                    className="w-1/2"
                  >
                    
                    <div className="w-1/2">
                      <div
                        onClick={() => console.log(product)}
                        className="h-42 pt-2 mt-5"
                      >
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_API +
                            "/uploads/" +
                            product?.image
                          }
                          alt="Product Image"
                          className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg transition ease-in-out duration-200 hover:scale-150"
                          height={100}
                          width={100}
                        />
                      </div>
                      <p className="text-center mt-5 text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                        {product.name}
                      </p>
                     
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="p-4 text-center">
              <Link
                href={`category/category?search=${x.category}`}
                className="border-2 py-2 px-5 border-primary text-orange-900 bg-white rounded-lg w-32 md:w-40 lg:w-48 hover:bg-orange-800 hover:text-white focus:bg-orange-800 focus:text-white transition-colors duration-300"
              >
                Visit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
