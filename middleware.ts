// import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "./app/constants";
import { NextAuthMiddlewareOptions, withAuth } from "next-auth/middleware";

const authConfig = {
  pages: {
    signIn: LOGIN_ROUTE,
    newUser: REGISTER_ROUTE,
  },
  // jwt: { decode: authOptions.jwt?.decode },
  // callbacks: {
  //   authorized: ({ token }) => !!token,
  // },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthMiddlewareOptions;

export default withAuth(authConfig);

export const config = {
  matcher: [
    // "/dashboard",
    "/dashboard/:path*",
    {
      source: "/((?!api|auth|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
