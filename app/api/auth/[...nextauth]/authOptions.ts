import { API_LOGIN_URL, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/constants";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { POST as LoginWithCredentialsAPI } from "../../custom-auth/login/route";
import { NextRequest } from "next/server";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await LoginWithCredentialsAPI(
            new NextRequest(API_LOGIN_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }),
          );

          if (res.ok) {
            const responseData = await res.json();
            return responseData.data;
          } else {
            const errorData = await res.json();
            if (errorData.emailVerificationLink)
              throw new Error(
                JSON.stringify({
                  emailVerificationLink: errorData.emailVerificationLink,
                }),
              );
            throw new Error(errorData.error);
          }
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error("Unknown error occured");
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: LOGIN_ROUTE,
    newUser: REGISTER_ROUTE,
  },
} satisfies NextAuthOptions;
