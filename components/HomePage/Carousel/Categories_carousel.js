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

export default function Categories_carousel() {
  const { products } = useContext(ProductContext);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array?.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div className="relative w-full  py-2 px-10   ">
      <div>
        <h1 className="text-2xl font-[900] pt-12">All  <span className="text-primary">Categories</span></h1>
      </div>
      {/* Carousel for mobile */}
      <Carousel className="h-auto w-full md:hidden py-5">
        <CarouselContent>
          {chunkArray(products?.slice(), 2).map((group, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-evenly w-full space-x-4">
                {group.map((productItem) => (
                  <Link
                    href={`/products/id?search=${productItem?.id}`}
                    key={productItem?.id}
                    className="group" // Add group class to the Link
                  >
                    <div className="bg-white rounded-lg overflow-hidden flex-1 flex flex-col items-center transition-transform duration-200 ease-in-out transform group-hover:scale-90 h-36"> {/* Set a fixed height */}
                      <div className="flex-1 flex items-center justify-center">
                        {/* Product Image */}
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_API +
                            "/uploads/" +
                            productItem?.image
                          }
                          alt={productItem.name}
                          className="w-24 h-24 object-cover rounded-full"
                          height={100}
                          width={100}
                        />
                      </div>

                      {/* Product Name (3-word limit) */}
                      <div className="my-1 text-center text-gray-800">
                        <p className="text-sm font-semibold text-ellipsis whitespace-nowrap">
                          {productItem.name.split(" ").slice(0, 3).join(" ")}
                        </p>
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

      {/* Carousel for desktop */}
      <Carousel className="h-auto w-full hidden md:flex">
        <CarouselContent>
          {chunkArray(products?.slice(), 12).map((group, i) => (
            <CarouselItem key={i}>
              <div className="flex justify-evenly w-full space-x-4">
                {group.map((productItem) => (
                  <Link
                    href={`/products/id?search=${productItem?.id}`}
                    key={productItem?.id}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden flex-1 flex flex-col items-center transition-transform duration-200 ease-in-out transform group-hover:scale-110 h-36"> {/* Set a fixed height */}
                      <div className="flex-1 flex items-center justify-center">
                        {/* Product Image */}
                        <Image
                          src={
                            process.env.NEXT_PUBLIC_API +
                            "/uploads/" +
                            productItem?.image
                          }
                          alt={productItem.name}
                          className="w-24 h-24 object-cover rounded-full"
                          height={100}
                          width={100}
                        />
                      </div>

                      {/* Product Name (3-word limit) */}
                      <div className="mt-4 text-center text-gray-800">
                        <p className="text-sm font-semibold text-ellipsis whitespace-nowrap">
                          {productItem.name.split(" ").slice(0, 3).join(" ")}
                        </p>
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
