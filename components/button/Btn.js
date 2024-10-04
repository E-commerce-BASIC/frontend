"use client";
import React, { useContext } from "react";
import { Invoices } from "@/Context/InvoicesProvider";

export default function Btn({ Color, order_id }) {
  const {Invoice}=useContext(Invoices)
  const { setOrder_id } = useContext(Invoices);
  return (
    <div>
      <button
        onClick={async() => (await setOrder_id(order_id),await Invoice())}
        className={`${Color} hover:bg-red-600 text-white font-bold py-1 px-4 rounded`}
      >
        PDF
      </button>
    </div>
  );
}
