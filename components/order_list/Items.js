import React, { useContext } from "react";
import Btn from "../button/Btn";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Context } from "@/Context/Context";

export default function Items({
  Processing,
  Color,
  date,
  T_id,
  order_id,
  x,
  backgroundColorClass,
}) {
  const router = usePathname();
  // console.log(router, "<-------");

  const { tracking, setTracking, TrackingData, setTrackingData } =
    useContext(Context);
  const statusClasses = {
    Completed: "bg-green-500",
    Processing: "bg-yellow-300",
    Dispatched: "bg-gray-500",
    AddToCart: "bg-red-400",
    Refund: "bg-red-700",
    Placed: "bg-purple-600",
  };

  // Extracting the order status
  // const orderStatus = tracking;
  // const backgroundColorClass = statusClasses[Processing] || ""; // Fallback to empty string if status is unknown

  return (
    <div
      onClick={() => console.log(statusClasses[Processing])}
      className={`w-full flex justify-between text-gray-600 items-center mb-6  p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out ${statusClasses[Processing]}`}
    >
      <div className="font-medium text-sm text-white">
        #{x?.invoice?.tracking?.tracking_no}
      </div>
      <div className="text-sm text-white">{date}</div>

      {router != "/admin/Orders" ? (
        <span
          className={`text-white ${
            (Processing == "Completed" && "bg-green-500") ||
            (Processing == "Processing" && "bg-yellow-300") ||
            (Processing == "Dispatched" && "bg-gray-500") ||
            (Processing == "AddToCart" && "bg-red-400") ||
            (Processing == "Placed" && "bg-purple-600")
          } rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {Processing}
        </span>
      ) : (
        <div className="mb-4">
          <select
            onChange={async (e) => {
              await axios.post("/api/Admin/order_status", {
                newStatus: e.target.value,
                order_id,
              });
              await window.location.reload();
            }}
            value={Processing}
            id="status"
            className="block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
            <option value="Refund">Refund</option>
            <option value="Dispatched">Dispatched</option>
            <option value="AddToCart">Add To Cart</option>
            <option value="Placed">Placed</option>
          </select>
        </div>
      )}
      <Btn Color="bg-black" order_id={order_id} />
    </div>
  );
}
