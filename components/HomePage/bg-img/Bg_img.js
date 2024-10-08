import React from "react";
import Carousels from "../Carousels";

export default function Bg_img() {
  return (
    <div>
      <div className="h-[70vh] w-full bg-no-repeat bg-cover overflow-hidden absolute z-[1]">
        <Carousels />
      </div>
    </div>
  );
}
