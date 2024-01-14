import { LOGIN_ROUTE, REGISTER_ROUTE } from "./app/constants";
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: LOGIN_ROUTE,
    newUser: REGISTER_ROUTE,
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export const config = { matcher: ["/", "/admin"] };
