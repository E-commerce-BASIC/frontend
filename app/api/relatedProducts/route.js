import axios from "axios";
import { NextResponse } from "next/server";

  

export const GET = async (req) => {
  try {
    // URL se id ko extract karein
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ status: 400, message: "Product ID is missing" });
    }

    // API ko hit karein to get related products
    const products = await axios.get(`${process.env.api}/product/get_related_product/${id}`);

    if (!products.data || products.data.length === 0) {
      return NextResponse.json({ status: 400, message: "No products found" });
    }

    return NextResponse.json({
      status: 200,
      message: "Products fetched successfully",
      data: products.data,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Error fetching products", error: error.message });
  }
};
