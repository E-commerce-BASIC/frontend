"use client";

import axios from "axios";
// import { headers } from "next/headers";
import { createContext, useEffect, useState } from "react";

export const Invoices = createContext();

const InvoicesProvider = ({ children }) => {
  const [Order_id, setOrder_id] = useState(null);
  console.log({ Order_id });
  const Invoice = async () => {
    try {
      
      const Invoices = await axios.get(`/api/invoice?order_id=${Order_id}`);
      console.log(Invoices, "<========================");
    } catch (error) {
      console.error("Error:", error);
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
