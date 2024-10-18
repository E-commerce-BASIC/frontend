import { NextResponse } from "next/server";
import axios from "axios";

  

export const POST = async (req, { params }) => {
  try {
    const category = params.cate;
    const product = await axios.post(
      `${process.env.api}/category/get_all_product_by_category`,
      { category }
    );
    return NextResponse.json(
      {
        status: "success",
        data: product.data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
