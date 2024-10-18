
import { NextResponse } from "next/server";
import axios from 'axios'

  

export const POST = async (req) => {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    return NextResponse.json({
      message: "Please fill all the fields",
      status: 400,
    });
  } else {
    const check = await axios.post('http://localhost:8080/register_login/register', {
      username, password, email
    })
    if (check.status == 200) {
      return NextResponse.json({
        status: 201,
        message: check.data
      });
    } else {
      return NextResponse.json({
        status: 500,
        message: "Already Exist",
      });
    }
  }

};
