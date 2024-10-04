import React from "react";
import Items from "./Items";
export default function oder_list({}) {
  return (
    <div>
      <div className="container mx-auto p-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 md:w-7/12 lg:w-7/12 mx-auto">
          <h1 className="text-center text-2xl font-bold mb-4">Order History</h1>

          <div className="grid grid-cols-6 gap-4 text-gray-700 font-semibold text-sm border-b-2 pb-4 mb-4">
            <div>Order ID</div>
            <div>Customer Name</div>
            <div>Order Date</div>
            <div>Status</div>
            <div>Total</div>
            <div>Action</div>
          </div>
          <Items
            Processing={"Our sunao"}
            Color={"bg-green-500"}
            date={"4-10-2024"}
            name={"arsalan"}
            Total_price={"$12.00"}
            T_id={"#1231"}
            order_id={1}
          />
        </div>
      </div>
    </div>
  );
}
