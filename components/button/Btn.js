"use client";
import axios from "axios";
import React from "react";
// import { Invoices } from "@/Context/InvoicesProvider";

export default function Btn({ Color,order_id }) {
  // const { Invoice } = useContext(Invoices); // Use both from Invoices context

  const Invoice = async () => {
    try {
      // Fetch the invoice data from the API
      const { data } = await axios.get(`/api/invoice?order_id=${order_id}`);
      const pdfFileName = data.message.invoice.invoice; // Get the invoice file name

      // Construct the PDF URL
      const pdfUrl = `/invoices/${pdfFileName}`;

      // Open the PDF in a new tab
      if (pdfUrl) {
        window.open(pdfUrl, "_blank");
      } else {
        console.error("No PDF URL found");
      }
    } catch (error) {
      console.error("Error fetching invoice:", error);
    }
  };

  return (
    <div>
      <button
        onClick={Invoice} // Use a dedicated function to handle the async calls
        className={`${Color} hover:bg-red-600 text-white font-bold py-1 px-4 rounded`}
      >
        PDF
      </button>
    </div>
  );
}
