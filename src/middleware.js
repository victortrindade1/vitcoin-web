import { NextResponse } from "next/server";
// import { authenticate } from "auth-provider";

export function middleware(request) {
  console.log({ request });
  // const isAuthenticated = authenticate(request);

  // // If the user is authenticated, continue as normal
  // if (isAuthenticated) {
  //   return NextResponse.next();
  // }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/quemestaai", request.url));
}

export const config = {
  // matcher: "/dashboard/:path*",
  matcher: "/",
};
