import { NextResponse } from "next/server";
import axios from "axios";

  

export const GET = async (req, { params }) => {
  const { id } = params;

  const product = await axios.get(
    process.env.api + `/product/get_related_product/${id}`
  );
  if (!product) {
    return NextResponse.json({
      status: 404,
      message: "Product not found",
    });
  } else {
    return NextResponse.json({
      status: 200,
      message: "Product found",
      relatedProducts: product.data,
    });
  }
};
