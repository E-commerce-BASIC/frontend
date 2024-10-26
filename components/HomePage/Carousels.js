import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Carousels() {
  return (
    <Carousel 
      autoplay 
      autoplayDelay={2000} // Auto-play interval in milliseconds
      loop={true}
      className=""
    >
      <div className="h-full w-full">
        <Image
          src="https://img.lazcdn.com/us/domino/6b40bd28-3faa-40d7-a8fc-587be3e053dd_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
          alt="image 1"
          className="h-full w-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="relative h-full w-full">
        <Image
          src="https://img.lazcdn.com/us/domino/d6ae1fba-1f51-4e4c-a501-75b7737371d5_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
          alt="image 2"
          className="h-full w-full object-cover"
          height={100}
          width={100}
        />
      </div>
      <div className="relative h-full w-full">
        <Image
          src="https://img.lazcdn.com/us/domino/e4dc38af-a550-4fbd-990b-a9a177526260_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
          alt="image 3"
          className="h-full w-full object-cover"
          height={100}
          width={100}
        />
      </div>
    </Carousel>
  );
}
