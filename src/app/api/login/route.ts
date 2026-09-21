import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  const credentials = await request.json();

  try {
    const apiResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
      credentials,
    );

    const { token, admin } = apiResponse.data.data;

    const response = NextResponse.json({ admin });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(
        { message: error.response.data?.message || "خطا در ورود" },
        { status: error.response.status },
      );
    }
    return NextResponse.json({ message: "خطای غیرمنتظره" }, { status: 500 });
  }
}
