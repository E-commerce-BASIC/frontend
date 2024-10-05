import React from "react";
import Btn from "../button/Btn";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function Items({ Processing, Color, date, T_id, order_id }) {
  const router = usePathname();
  // console.log(router, "<-------");
  return (
    <div className="w-full flex justify-between text-gray-600 items-center mb-6 bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="font-medium text-sm">{T_id}</div>
      <div className="text-sm text-gray-500">{date}</div>

      {router != "/dashboard/Orders" ? (
        <span
          className={`text-white ${Color} rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {Processing}
        </span>
      ) : (
        <div class="mb-4">
          <select
            onChange={(e) => {
              axios.post("/api/Admin/order_status", {
                newStatus: e.target.value,
                order_id
              });
            }}
            id="status"
            class="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="refund">Refund</option>
            <option value="deleted">Deleted</option>
          </select>
        </div>
      )}
      <Btn Color="bg-black" order_id={order_id} />
    </div>
  );
}
