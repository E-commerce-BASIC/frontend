
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
// import User from "@/models/User";
import { NextResponse } from "next/server";
import axios from "axios";

  

export const GET = async (req) => {

  const authToken = cookies().get(process.env.authToken)?.value || "";
  try {
    const detail = jwt.verify(authToken, process.env.JWT_SECRET);
    const id = detail.id;
    const user = await axios.get(process.env.api + '/user/info',
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )

    if (!user) {
      return NextResponse.json({
        status: 401,
        error: "User not found",
      });
    } else {
      return NextResponse.json({
        status: 200,
        data: user.data,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 401,
      error,
    });
  }
};
