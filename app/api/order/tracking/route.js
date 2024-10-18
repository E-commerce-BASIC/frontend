import axios from "axios";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

  

export const POST = async (req) => {
  try {
    const authToken = cookies().get(process.env.authToken)?.value || "";
    const { Search } = await req.json();

    const Tracking_order = await axios.post(
      process.env.api + "/order/tracking",
      {
        tracking_id: Search,
      },
      {
        headers: {
          Authorization: `Bearer ${authToken}`, // Assuming you need to pass the token
          "Content-Type": "application/json",
        },
      }
    );

    if (!Tracking_order.data)
      return NextResponse.json({ status: 400, message: "Tracking not found" });

    return NextResponse.json({
      status: 201,
      message: "Tracking Found",
      data: Tracking_order.data,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "An error occurred",
      error: error.message,
    });
  }
};
