"use client";
import CardSkeleton from "@/components/CardSkeleton";
import { CartContext } from "@/Context/CartProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Category = ({ category }) => {
  const [data, setData] = useState([]);
  const { cartdetails, setCartDetails, addItemToCart } =
    useContext(CartContext);
  // const searchParams = useSearchParams();
  // const searchQuery = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      const product = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/category/get_all_product_by_category`,
        { category }
      );
      // console.log(product);
      setData(product.data);
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [category]);
  console.log(category);
  if (!data?.data?.products[0].image) {
    return (
      <div className="w-full lg:w-11/12 mx-auto my-4">
        <CardSkeleton />
      </div>
    );
  }

  return (
    <>
      <div className="p-4 bg-gray-100">
        <div className="flex gap-4">
          <div className="p-6 bg-gray-50 rounded-lg shadow-lg w-full">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {category}
              </h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-center">
              <div className="w-1/3 flex justify-center items-center">
                <Image
                  width={500}
                  height={400}
                  src={
                    process.env.NEXT_PUBLIC_API +
                    "/uploads/" +
                    data?.data?.products[0]?.image
                  }
                  alt={data?.data?.products[0]?.name}
                  className="w-full h-auto max-h-[300px] object-contain rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                />
              </div>
              <div className="w-2/3 space-y-4">
                <p className="text-lg font-medium text-gray-800 leading-tight">
                  {data?.data?.products[0]?.name}
                </p>
                <p className="text-sm text-gray-500">
                  1K+ bought in the past month
                </p>
                <button
                  onClick={(e) =>
                    addItemToCart({ product: data?.data?.products[0], e })
                  }
                  className="bg-red-500 text-white rounded-full py-2 px-5 font-medium transition-transform transform hover:bg-red-600 hover:scale-105"
                >
                  Add to cart
                </button>
                <p className="text-sm text-gray-500 mt-2">
                  No featured offers available
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  ${data?.data?.products[0]?.price}{" "}
                  {/* <span className="text-sm text-gray-500">
                    (5 used & new offers)
                  </span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto w-11/12 px-2 py-8 sm:px-6 sm:py-12 lg:px-8 text-gray-500 text-sm"
        style={{ maxWidth: "90rem" }}
      >
        Home <span className="mx-2">/</span> {category}
      </div>
      <div className="w-full lg:w-11/12 mx-auto my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        {data?.data?.products?.map((product, i) => (
          <Link
            href={`/products/id?search=${product?.id}`}
            key={i}
            className="group"
          >
            <div className="aspect-h-1 aspect-w-1 w-full  md:h-5/6 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Image
                width={500}
                height={400}
                src={process.env.NEXT_PUBLIC_API + "/uploads/" + product.image}
                alt={product?.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product?.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ${product?.price}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
