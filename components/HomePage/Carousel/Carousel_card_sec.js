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

export default function Carousel_card_first({ show }) {
  const { products } = useContext(ProductContext);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array?.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div className="relative w-full py-5 px-10 ">
      <div> 
        <h1></h1>
      </div>
      {/* Responsive Carousel */}
      <Carousel className="h-auto w-full">
        <CarouselContent>
          {chunkArray(products?.slice(), 4).map((group, i) => (
            <CarouselItem key={i}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 w-full overflow-hidden">
                {group.map((productItem) => (
                  <Link
                    href={`/products/id?search=${productItem?.id}`}
                    key={productItem?.id}
                    className="group"
                  >
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl flex flex-col h-full border-2 border-boderColour hover:border-boderHover transition ease-in-out duration-200 hover:scale-105">
                      {/* Product Name at the Top */}
                      <h3 className="w-full my-2 px-2 font-bold overflow-hidden h-10 text-gray-800 text-center text-ellipsis whitespace-nowrap">
                        {productItem.name}
                      </h3>

                      {/* Product Image */}
                      <div className="py-3 px-3">
                        <div className="flex justify-center">
                          <Image
                            src={
                              process.env.NEXT_PUBLIC_API +
                              "/uploads/" +
                              productItem?.image
                            }
                            alt={productItem.name}
                            className="w-full h-40 object-cover rounded-lg"
                            height={160} // Adjusted height
                            width={160}  // Adjusted width
                          />
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
