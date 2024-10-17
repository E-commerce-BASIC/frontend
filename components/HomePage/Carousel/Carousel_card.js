import React, { useContext } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/HomePage/ui/carousel";
import { ProductContext } from "@/Context/CreateProduct";
import Link from "next/link";
import Image from "next/image";

export default function Carousel_card({ show }) {
  const { products } = useContext(ProductContext);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array?.slice(i, i + chunkSize));
    }
    return result;
  };
  return (
    <div className="relative w-full">
      {" "}
      {/* Added relative positioning here */}
      <Carousel className="h-auto w-full md:hidden">
        <CarouselContent>
          {chunkArray(products?.slice(), 2).map((group, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-evenly w-full space-x-4">
                {group.map((productItem) => (
                  <Link
                    href={`/products/id?search=${productItem?.id}`}
                    key={productItem?.id}
                    className="group"
                  >
                    <div
                      key={productItem.id}
                      className="bg-white shadow-lg rounded-lg overflow-hidden flex-1 flex flex-col hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="p-4 flex-1">
                        {/* Product Name */}
                        <h3 className="text-xl font-semibold text-center text-gray-800">
                          {productItem.name}
                        </h3>

                        {/* Product Image */}
                        <div className="flex justify-center mt-4">
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_API +
                              "/uploads/" +
                              productItem?.image
                            }
                            alt={productItem.name}
                            className="w-32 h-32 object-cover rounded-lg"
                            height={100}
                            width={100}
                          />
                        </div>

                        {/* Product Description */}
                        <div className="mt-4 text-center text-gray-600">
                          <p className="text-sm">{productItem.description}</p>
                        </div>
                      </div>

                      {/* Price & Action */}
                      <div className=" text-center">
                        <div className="text-lg font-semibold text-gray-800 mb-2">
                          ${productItem.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 z-10" />
      </Carousel>
      <Carousel className="h-auto w-full hidden md:flex">
        <CarouselContent>
          {chunkArray(products?.slice(), 5).map((group, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-evenly w-full">
                {group.map((productItem) => (
                  <Link
                    href={`/products/id?search=${productItem?.id}`}
                    key={productItem?.id}
                    className="group"
                  >
                    <div
                      key={productItem.id}
                      className="bg-white shadow-lg rounded-lg overflow-hidden flex-1 flex flex-col hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="p-4 flex-1">
                        {/* Product Name */}
                        <h3 className="text-xl font-semibold text-center text-gray-800">
                          {productItem.name}
                        </h3>

                        {/* Product Image */}
                        <div className="flex justify-center mt-4">
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_API +
                              "/uploads/" +
                              productItem?.image
                            }
                            alt={productItem.name}
                            className="w-32 h-32 object-cover rounded-lg"
                            height={100}
                            width={100}
                          />
                        </div>

                        {/* Product Description */}
                        <div className="mt-4 text-center text-gray-600">
                          <p className="text-sm">{productItem.description}</p>
                        </div>
                      </div>

                      {/* Price & Action */}
                      <div className=" text-center">
                        <div className="text-lg font-semibold text-gray-800 mb-2">
                          ${productItem.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 z-10" />
        <CarouselNext className="absolute right-0 top-1/2 z-10" />
      </Carousel>
    </div>
  );
}
