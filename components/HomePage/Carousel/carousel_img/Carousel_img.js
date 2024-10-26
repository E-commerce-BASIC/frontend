import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Carousel_img() {
  return (
    <div className="relative w-full">
      {/* Title for the Carousel */}
      <Carousel 
        autoplay 
        autoplayDelay={2000} // Auto-play interval in milliseconds
        className=""
      >
        <div className="w-full h-80 py-5"> {/* Increased height to h-80 */}
          <Image
            src="https://img.lazcdn.com/us/domino/6b40bd28-3faa-40d7-a8fc-587be3e053dd_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="image"
            className="w-full h-full object-cover"
            width={800} // Adjusted width
            height={450} // Adjusted height
          />
        </div>
        <div className="w-full h-80">
          <Image
            src="https://img.lazcdn.com/us/domino/d6ae1fba-1f51-4e4c-a501-75b7737371d5_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="image 2"
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>
        <div className="w-full h-80">
          <Image
            src="https://img.lazcdn.com/us/domino/6b40bd28-3faa-40d7-a8fc-587be3e053dd_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="image 1"
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>
        <div className="w-full h-80">
          <Image
            src="https://img.lazcdn.com/us/domino/e4dc38af-a550-4fbd-990b-a9a177526260_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="image 3"
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>

        <div className="w-full h-80">
          <Image
            src="https://img.lazcdn.com/us/domino/d6ae1fba-1f51-4e4c-a501-75b7737371d5_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="image 2"
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>
        <div className="w-full h-80">
          <Image
            src="https://img.lazcdn.com/us/domino/e4dc38af-a550-4fbd-990b-a9a177526260_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="image 3"
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>

        <div className="w-full h-80">
          <Image
            src="https://img.lazcdn.com/us/domino/d6ae1fba-1f51-4e4c-a501-75b7737371d5_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="image 2"
            className="w-full h-full object-cover"
            width={800}
            height={450}
          />
        </div>
      </Carousel>
    </div>
  );
}
