import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

  

export const POST = async (req) => {
    const authToken = cookies().get(process.env.authToken)?.value || "";
    const { id } = await req.json(); // Extract product id

    try {
        const response = await axios.post(
            `${process.env.api}/order/delete_item`,
            { product_id: id }, // This is the correct place for the body
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }
        );

        return NextResponse.json({
            message: "Item deleted",
            cart: response.data,
        });
    } catch (error) {
        console.error("Error deleting item:", error);

        return NextResponse.json({
            message: "Item not deleted",
            error: error.message,
        });
    }
};
