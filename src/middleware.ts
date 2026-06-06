// src/middleware.ts

import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE_NAME = "af_session";

export function middleware(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  if (!session) {
    const loginUrl = new URL(
      process.env.NEXT_PUBLIC_HOME_URL ?? "https://astralforge.studio"
    );

    loginUrl.searchParams.set("login", "true");
    loginUrl.searchParams.set("redirect", request.url);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|avatars|banners|badges|icons|images).*)",
  ],
};