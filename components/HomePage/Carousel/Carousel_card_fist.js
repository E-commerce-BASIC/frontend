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
  const { products, categories } = useContext(ProductContext);
  console.log(categories);

  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array?.length; i += chunkSize) {
      result.push(array?.slice(i, i + chunkSize));
    }
    return result;
  };

  return (
    <div className="relative w-full mt-5 mb-2 py-5 px-10">
      {categories.length > 1 &&
        categories?.map((cat, index) => {
          return (
            <div
            onClick={()=>console.log(cat)}
             className={`${!cat.products.length > 0 && "hidden"}`}
              key={index}
              >
              <div className="text-2xl  px-11 font-extrabold">
                <span className="text-primary">{cat.category}</span>
              </div>
              <Carousel className="h-auto w-full">
                <CarouselContent>
                  {chunkArray(cat.products?.slice(), 6).map((group, i) => (
                    <CarouselItem key={i}>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full overflow-hidden  ">
                        {group.map((productItem) => (
                          <Link
                            href={`/products/id?search=${productItem?.id}`}
                            key={productItem?.id}
                            className="group"
                          >
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl flex flex-col h-full border-2 border-boderColour hover:border-boderHover transition ease-in-out duration-200 hover:scale-110">
                            
                              <div className="py-3 px-3">
                                <div className="flex justify-center">
                                  <Image
                                    src={
                                      process.env.NEXT_PUBLIC_API +
                                      "/uploads/" +
                                      productItem?.image
                                    }
                                    alt={productItem.name}
                                    className="w-full h-52 object-cover rounded-lg"
                                    height={100}
                                    width={100}
                                  />
                                </div>

                                <h3 className="w-full my-3 overflow-hidden h-12 font-semibold text-gray-800 text-ellipsis whitespace-nowrap">
                                  {productItem.name}
                                </h3>
                              </div>

                              <div className="text-center mb-4">
                                <div className="text-lg font-semibold text-primary-color text-ellipsis whitespace-nowrap">
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
        })}
    </div>
  );
}
