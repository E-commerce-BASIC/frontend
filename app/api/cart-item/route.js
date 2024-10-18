
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

  

export const GET = async (req) => {

  const authToken = cookies().get(process.env.authToken)?.value || "";

  try {
    const cartItem = await axios.get(process.env.api + "/order/Cart", {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    if (!cartItem) {
      return NextResponse.json({
        message: "Cart item not found",
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Cart item found",
      cartItem:cartItem.data,
      status: 200,
    });
  } catch (error) {
    console.error("Error in POST /api/cart:", error.toString());
    return NextResponse.json({
      message: "Server error",
      error: error.toString(),
      status: 500,
    });
  }
};
