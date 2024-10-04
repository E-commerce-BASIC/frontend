"use client";

import axios from "axios";
// import { headers } from "next/headers";
import { createContext, useEffect, useState } from "react";

export const bank = createContext();

const paymentProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    payment_methode: "Cash on delievery",
    currency: "pk",
  });

  const Payment = async () => {
    try {
      const bank = await axios.post("/api/checkout/bank", {
        payment_methode: formData.payment_methode,
        currency: formData.currency,
      }); // Send as JSON
      console.log(bank, "<========================");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <bank.Provider
      value={{
        Payment
      }}
    >
      {children}
    </bank.Provider>
  );
};

export default paymentProvider;
