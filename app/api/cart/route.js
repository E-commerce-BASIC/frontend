
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

  

export const POST = async (req) => {
  const authToken = cookies().get(process.env.authToken)?.value || "";
  const { items } = await req.json(); // Expecting items from the request body

  try {
    // Ensure you are sending the headers correctly in the axios request
    const cart = await axios.post(
      `${process.env.api}/order`,
      {
        product_id: items[0].productId,
        quantity: items[0].quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    return NextResponse.json({
      message: "Item added",
      cart: cart.data, // Access the data from the response
    });

  } catch (error) {
    console.error(error); // Use console.error for logging errors

    return NextResponse.json({
      message: "Item not added",
      error: error.response?.data || error.message, // Return more useful error information
    }, { status: error.response?.status || 500 }); // Set appropriate HTTP status
  }
};




