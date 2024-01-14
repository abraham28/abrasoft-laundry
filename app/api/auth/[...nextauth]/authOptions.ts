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
          return null;
          // if (error instanceof Error) {
          //   throw new Error(error.message);
          // } else {
          //   throw new Error("Unknown error occured");
          // }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) token.sub = user.id;
      return token;
    },
    async session({
      session,
      //  token
    }) {
      if (session && session.user) {
        // if (token.sub) {
        //   session.user["id"] = token.sub;
        // }
        // const res = await fetch(
        //   `https://lc-ranklist.vercel.app/api/getUsernameStatus?user_id=${session.user.id}`,
        // );
        // if (res.status === 409) {
        //   const response = await res.json();
        //   session.user.lc_username = response.data[0].lc_username;
        //   session.user.org = response.data[0].org;
        // }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: LOGIN_ROUTE,
    newUser: REGISTER_ROUTE,
  },
} satisfies NextAuthOptions;
