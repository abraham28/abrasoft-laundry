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
