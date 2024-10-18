  
// import ClothingProduct from "@/models/Product";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

  

export const GET = async (req) => {
   
  try {
    // const products = await ClothingProduct.find({});
    const authToken = cookies().get(process.env.authToken)?.value || "";
    const products = await axios.get(process.env.api + '/product/getallproduct')
    return NextResponse.json({
      status: 200,
      message: "success",
      data: products.data,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
