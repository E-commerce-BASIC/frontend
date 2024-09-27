  
// import ClothingProduct from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
   
  const products = await axios.get(process.env.api+`/product/get_related_product/${id}`)
  if (!products)
    return NextResponse.json({ status: 400, message: "No products found" });
  return NextResponse.json({
    status: 200,
    message: "Products fetched successfully",
    data: products.data,
  });
};
