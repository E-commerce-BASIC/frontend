// import User from "@/models/User";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export const GET = async (req) => {
  //   const { Order_id } = await req.json();
  const { searchParams } = new URL(req.url);
  const Order_id = searchParams.get("order_id");
  const authToken = cookies().get(process.env.authToken)?.value || "";
  const check = await axios.get(`${process.env.api}/invoice/download/${Order_id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  console.log(check);

  return NextResponse.json({
    status: 200,
    message: "Downloaded",
  });
};
