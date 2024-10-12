"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const InstallmentContext = createContext();

export const InstallmentContextProvider = ({ children }) => {
  const [uploading, setUploading] = useState(false);
  const [installment, setInstallment] = useState({
    name: "",
    address: "",
    idCard: "", // ID card number
    passport: "", // Passport number
    visa: "", // Visa number
    passport_image: null, // File for passport image
    visa_image: null, // File for visa image
    salary_slip_image: null, // File for salary slip image
    id_card: null, // File for ID card image
  });

  // create Product
  const fetchProduct = async (e) => {
    e.preventDefault();
    // console.log(installment)
    // return false
    let formData = new FormData();
    formData.append("name", installment.name);
    formData.append("address", installment.address);
    formData.append("idCard", installment.idCard);
    formData.append("passport", installment.passport);
    formData.append("visa", installment.visa);
    formData.append("passport_image", installment.passport_image);
    formData.append("visa_image", installment.visa_image);
    formData.append("salary_slip_image", installment.salary_slip_image);

    try {
      if (uploading) {
        toast.error("Please wait while image is uploading");
        return;
      }
      await axios.post("/api/checkout/installment", formData);
    } catch (error) {
      toast.error(error.message);
      console.log(error);

      return;
    }
  };

  return (
    <InstallmentContext.Provider
      value={{
        installment,
        setInstallment,
        fetchProduct,
      }}
    >
      {children}
    </InstallmentContext.Provider>
  );
};
