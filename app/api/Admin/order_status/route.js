// import ClothingProduct from "@/models/Product";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

  

export const POST = async (req) => {
  const authToken = cookies().get(process.env.authToken)?.value || "";
  const { order_id, newStatus } = await req.json(); // Expecting items from the request body

  try {
    // Ensure you are sending the headers correctly in the axios request
    const status_order = await axios.post(
      `${process.env.api}/order/order_status`,
      {
        newStatus,
        order_id,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return NextResponse.json({
      message: "updated!",
      status_order: status_order.data, // Access the data from the response
    });
  } catch (error) {
    console.error(error); // Use console.error for logging errors

    return NextResponse.json(
      {
        message: "error",
        error: error.response?.data || error.message, // Return more useful error information
      },
      { status: error.response?.status || 500 }
    ); // Set appropriate HTTP status
  }
};
