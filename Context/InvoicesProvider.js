"use client";

import axios from "axios";
import { createContext, useState } from "react";

export const Invoices = createContext();

const InvoicesProvider = ({ children }) => {
  const [Order_id, setOrder_id] = useState(0);

  const Invoice = async () => {
    try {
      // Fetch the invoice data from the API
      const { data } = await axios.get(`/api/invoice?order_id=${Order_id}`);
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
    <Invoices.Provider
      value={{
        Invoice,
        Order_id,
        setOrder_id,
      }}
    >
      {children}
    </Invoices.Provider>
  );
};

export default InvoicesProvider;
