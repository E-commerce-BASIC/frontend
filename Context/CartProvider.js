"use client";
import axios from "axios";
import { createContext, useContext, useState } from "react";
import { Context } from "./Context";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { user } = useContext(Context);
  const [cartdetails, setCartDetails] = useState({
    quantity: 1,
  });

  // add item to cart
  const addItemToCart = async ({ product, e }) => {
    if (e && e.preventDefault) e.preventDefault();
    const authToken = Cookies.get(process.env.NEXT_PUBLIC_authToken) || "";
    // console.log(product)
    try {
      const cartItem = await axios.post(
        process.env.NEXT_PUBLIC_API + "/order",
        {
          product_id: product.id,
          quantity: cartdetails.quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      // console.log(cartItem?.data?.order, ",------cart item");
      cartItem?.data?.order
        ? toast.success("Item Added")
        : toast.error("error");
      setCartDetails({
        quantity: 1,
      });
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartdetails,
        setCartDetails,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
