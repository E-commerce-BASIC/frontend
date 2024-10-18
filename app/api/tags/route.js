import { NextResponse } from "next/server";
import axios from 'axios'
import { cookies } from "next/headers";

  

export const GET = async (req) => {
  const authToken = cookies().get(process.env.authToken)?.value || "";
 

  const Tag = await axios.get(process.env.api + '/tag',
    {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
  )


  return NextResponse.json({
    status: 201,
    message: "Tags found",
    data: Tag.data,
  });
};