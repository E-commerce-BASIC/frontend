// pages/api/category/all_product.js
import { NextResponse } from "next/server";
import axios from "axios";

  

export const GET = async (req) => {
  try {
    const { data } = await axios.get(
      `${process.env.api}/category/all_product`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(
      {
        status: "success",
        data: data.categories,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      { status: 500 }
    );
  }
};
