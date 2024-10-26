import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function TouchGallery({ ProductID }) {

  const [images, setImages] = useState([])

  const [active, setActive] = React.useState([]);
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API + `/product/images/${ProductID}`)
      .then(x => (setImages(x.data),setActive(`${process.env.NEXT_PUBLIC_API}/uploads/${x.data[0].image}`)))
      .catch(err => console.log(err)
      )
  }, [])

  
  return (
    <div className="flex gap-4">
      
      <div className="flex flex-col gap-4">
        {images?.map(({ image: imgelink }, index) => (
          <div key={index}>

            <Image
              onClick={() => setActive(`${process.env.NEXT_PUBLIC_API}/uploads/${imgelink}`)}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              src={
                process.env.NEXT_PUBLIC_API +
                "/uploads/" +
                imgelink
              }
              width={100}
              height={100}
              alt={`thumbnail-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Right side: Main Image */}
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="active-image"
        />
      </div>
    </div>
  );
}
