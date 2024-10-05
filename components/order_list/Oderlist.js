"use client";
import React, { useEffect, useState } from "react";
import Items from "./Items";
import axios from "axios";
import moment from "moment";

export default function oder_list() {
  const [Order, setOrder] = useState([]);
  useEffect(() => {
    const Orders = async () => {
      await axios
        .get("/api/invoice/all_orders")
        .then((x) => setOrder(x.data.message));
    };
    Orders();
  }, []);
  // console.log(Order);
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full">
          <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
            Order History
          </h1>

          <div className="w-full flex justify-between gap-6 text-gray-700 font-semibold text-base border-b-2 pb-4 mb-6">
            <div className="col-span-1">Order ID</div>
            <div className="col-span-2">Order Date</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-2">Action</div>
          </div>

          {Order.map((x, i) => {
            return (
              <Items
                key={i}
                Processing={x.order_status}
                Color={"bg-green-500"}
                date={moment(x.createdAt).format("LLLL")}
                T_id={`#${x.id}`}
                order_id={x.id}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}
