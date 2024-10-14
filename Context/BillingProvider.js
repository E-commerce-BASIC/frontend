"use client";

import axios from "axios";
// import { headers } from "next/headers";
import React,{ createContext, useEffect, useState } from "react";

export const Billing = createContext();

const BillingProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    full_name: "",
    address: "",
    city: "",
    country: "",
    email: "",
    phone_no: "",
    payment_methode: "",
    tax_info: "",
  });
  
  const Billing_info_api = async () => {
    // console.log(formData)
    try {
      const billing = await axios.post("/api/checkout/billing", {
        // data: {
          full_name: formData.full_name,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          email: formData.email,
          phone_no: formData.phone_no,
          payment_methode: formData.payment_methode,
        // },
      }); // Send as JSON
      console.log(billing, "<========================");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Billing.Provider
      value={{
        formData,
        setFormData,
        currentStep,
        setCurrentStep,
        Billing_info_api,
      }}
    >
      {children}
    </Billing.Provider>
  );
};

export default BillingProvider;
