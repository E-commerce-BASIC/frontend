
// import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";
import axios from 'axios'
import { cookies } from "next/headers";

  

export const POST = async (req) => {
  const authToken = cookies().get(process.env.authToken)?.value || "";
  const formData = await req.formData();

  const clothingProduct = await axios.post(process.env.api + '/product',
    formData,
    {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
  )

  if (!clothingProduct)
    return NextResponse.json({ status: 400, message: "Product not created" });


  return NextResponse.json({
    status: 201,
    message: "Product created successfully",
    data: clothingProduct.data,
  });
};

export const GET = async (req) => {
  const authToken = cookies().get(process.env.authToken)?.value || "";
  const products = await axios.get(process.env.api + '/product/getallproduct')
  if (!products) {
    return NextResponse.json({ status: 400, message: "No products found" });
  } else {

    return NextResponse.json({
      status: 200,
      message: "Products fetched successfully",
      data: products.data,
    });
  }

}

