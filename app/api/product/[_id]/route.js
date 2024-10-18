  
// import ClothingProduct from "@/models/Product";
import axios from "axios";
import { NextResponse } from "next/server";

  

export const GET = async (req, { params }) => {
   
  const { _id } = params;
  const products = await axios.get(process.env.api + `/product/getproduct/${_id}`)
  if (!products) {
    return NextResponse.json({
      status: 404,
      message: "Product not found",
    });
  } else {
    return NextResponse.json({
      status: 200,
      message: "Product found",
      data: products.data,
    });
  }
};
