import React from "react";
import Btn from "../button/Btn";
export default function Items({ Processing, Color, date, T_id, order_id }) {
  return (
    <div className="w-full flex justify-between text-gray-600 items-center mb-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="font-medium text-sm">{T_id}</div>
      <div className="text-sm text-gray-500">{date}</div>
     
        <span
          className={`text-white ${Color} rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {Processing}
        </span>
        <Btn Color="bg-black" order_id={order_id} />
    </div>
  );
}
