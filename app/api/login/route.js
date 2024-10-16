export const dynamic = "force-dynamic"; // Add this line to force dynamic rendering

import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import axios from 'axios';

export const POST = async (req) => {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }

    // Make your POST request to the external API
    const check = await axios.post(`${process.env.api}/register_login/login`, {
      username,
      password,
    });

    if (check.status === 200) {
      cookies().set(process.env.authToken, check.data.token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      });

      return NextResponse.json({
        status: 200,
        message: "User login successfully",
      });
    } else {
      return NextResponse.json({
        message: "Login failed",
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
};
