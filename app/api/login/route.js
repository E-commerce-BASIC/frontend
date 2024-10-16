// import User from "@/models/User"; // Not used in the current code
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import axios from 'axios';

export const POST = async (req) => {
  try {
    const { username, password } = await req.json();

    // Check if the username and password are provided
    if (!username || !password) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    }

    // POST request to your external API (replace with the correct endpoint)
    const check = await axios.post(`${process.env.api}/register_login/login`, {
      username,
      password,
    });

    // If the request is successful and the status is 200
    if (check.status === 200) {
      // Set the cookie using cookies() from next/headers
      cookies().set(process.env.authToken, check.data.token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return NextResponse.json({
        status: 200,
        message: "User login successfully",
      });
    } else {
      // If no specific error, still respond with a successful status but no login
      return NextResponse.json({
        message: "Login failed",
        status: 200,
      });
    }
  } catch (error) {
    console.error("Error during login:", error); // For better debugging
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
};
