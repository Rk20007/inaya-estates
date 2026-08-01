import { NextResponse } from "next/server";
import { createSessionToken, ADMIN_COOKIE_NAME } from "@/lib/adminAuth";

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { username, password } = body;

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validUsername || !validPassword) {
    return NextResponse.json(
      { success: false, message: "Admin credentials are not configured on the server." },
      { status: 500 }
    );
  }

  if (username !== validUsername || password !== validPassword) {
    return NextResponse.json({ success: false, message: "Invalid username or password." }, { status: 401 });
  }

  let token;
  try {
    token = await createSessionToken(username);
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return response;
}
