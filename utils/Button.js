"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Button = ({setIsCartOpen}) => {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      disabled={isLoading}
      onClick={() => (route.push('/checkout'), setIsCartOpen(false))}
      className={`flex w-full items-center justify-center rounded-md border border-transparent bg-[#2f4550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#2f4550] ${isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
    >
      {isLoading ? "Processing..." : " Proceed to checkout"}
    </button>
  );
};

export default Button;
