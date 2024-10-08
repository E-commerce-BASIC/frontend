import React from "react";

export default function Fist_nav() {
  return (
    <div>
      <nav className="flex  ">
        <li className=" nav_fist_cam_name text-center list-none w-52 bg-red-500 text-gray-200">
          Lorem
        </li>
        <li className="list-none bg-gray-700 text-red-500  ">
          <marquee className="text-white " behavior="scroll" direction="left">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            perferendis, voluptatibus porro aspernatur nam illo ab nobis sunt
            cumque eaque, incidunt ad voluptas vel neque, deleniti eum dolor
            perspiciatis assumenda?
          </marquee>
        </li>
      </nav>
    </div>
  );
}
