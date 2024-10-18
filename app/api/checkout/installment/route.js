import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

  

export const POST = async (req) => {
  const authToken = cookies().get(process.env.authToken)?.value || "";
  const formData = await req.formData();

  const check = await axios.post(
    `${process.env.api}/installment/create`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );

  return NextResponse.json({
    status: 200,
    message: check.data,
  });
};
