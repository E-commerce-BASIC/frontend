
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

  

export const POST = async (req) => {
  const authToken = cookies().get(process.env.authToken)?.value || "";
  try {
    const formData = await req.json(); // Extract JSON data

    const check = await axios.post(`${process.env.api}/billing`, formData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log(formData);
    if (check.status === 200) {
      return NextResponse.json({
        status: 200,
        message: "Data fetched successfully!",
        data: "hi",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: `Error: ${error.message}`,
    });
  }
};
