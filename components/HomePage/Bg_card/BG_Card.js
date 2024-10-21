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
  // console.log(Categories);
  return (
    <div className="bgimg_card container  relative z-10  mx-auto p-4 mt-80">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Categories?.map((x, i) => {
          const firstTwo = x.products.slice(0, 2);
          const lastTwo = x.products.slice(2);
          return (
            <div className="bg-white border-2 border-boderColour shadow-md rounded-lg overflow-hidden w-full sm:w-96 hover:transition ease-in-out duration-100 hover:scale-[1.02]">
              <div className="p-4">
                <h3 className="text-lg font-semibold">{x.category}</h3>
                <div className="flex justify-center">
                  {firstTwo.map((product, p1) => {
                    return (
                      <a key={p1} href={`/products/id?search=${product.id}`}>
                        <div className="h-42 pt-2 mt-5">
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_API +
                              "/uploads/" +
                              product.image
                            }
                            alt="Product Image"
                            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg transition ease-in-out duration-200 hover:scale-150"
                            height={100}
                            width={100}
                          />
                        </div>
                        <p className="text-center mt-5 text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                          {/* {product.name} */}
                          {product.name.split(" ").slice(0, 2).join(" ")}
                        </p>
                      </a>
                    );
                  })}
                </div>
                <div className="flex justify-center mt-2 space-x-4">
                  {lastTwo.map((product, p1) => {
                    return (
                      <a key={p1} href={`/products/id?search=${product.id}`}>
                        <div className="h-42 pt-2 mt-5">
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_API +
                              "/uploads/" +
                              product.image
                            }
                            alt="Product Image"
                            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg transition ease-in-out duration-200 hover:scale-150"
                            height={100}
                            width={100}
                          />
                        </div>
                        <p className="text-center mt-5 text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                          {product.name.split(" ").slice(0, 2).join(" ")}
                        </p>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="p-4 text-center">
                <Link
                  href={`/category/category?search=${x.category}`}
                  className=" border-2 py-2  border-[#2a5353] text-[#00a89f] px-10 rounded-md transition hover:border-[#00a89f] hover:text-[#2a5353]"
                >
                  Visit
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
