import { API_LOGIN_URL, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/constants";
import { handleFetchApi } from "@/helpers/handleFetchApi";
import { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
        remember: { type: "text" },
      },
      async authorize(credentials) {
        try {
          const data = await handleFetchApi<User | null>(API_LOGIN_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          });

          return data;
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
