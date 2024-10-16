
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export const GET = async (req) => {
   
  try {
    // const user = await User.find({});
    return NextResponse.json({
      status: 200,
      message: "success",
      // data: user,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: error.message,
    });
  }
};
