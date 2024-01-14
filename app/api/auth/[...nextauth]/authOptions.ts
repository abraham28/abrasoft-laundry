import { API_LOGIN_URL, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/constants";
import { handleFetchApi } from "@/helpers/handleFetchApi";
import { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
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
          const data = await handleFetchApi<User>(API_LOGIN_URL, {
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
  pages: {
    signIn: LOGIN_ROUTE,
    newUser: REGISTER_ROUTE,
  },
};
