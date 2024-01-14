import { getCookie, setCookie } from "cookies-next";
import debounce from "debounce-promise";

export const handleFetchApi: <T>(
  input: RequestInfo,
  init?: RequestInit | undefined,
) => Promise<T> = debounce(
  async (input: RequestInfo, init: RequestInit | undefined) => {
    try {
      // Get the JWT cookie from cookies-next
      const jwtCookie = getCookie("jwt");

      // Use the Headers object in the fetch request
      const res = await fetch(input, {
        ...init,
        headers: {
          ...(init && init.headers ? init.headers : {}),
          Cookie: "jwt=" + jwtCookie,
        },
      });

      if (res.ok) {
        const data = await res.json();
        // Check if there's a cookie set in the response
        const setCookieHeader = res.headers.get("Set-Cookie");

        if (setCookieHeader) {
          // Split the Set-Cookie header into individual cookies
          const cookies = setCookieHeader.split(";");

          // Set each cookie separately
          cookies.forEach((cookie) => {
            const [cookieKey] = cookie.split("="); // Extract the cookie key
            const trimmedCookie = cookie.trim(); // Trim any leading or trailing spaces

            // Set the received cookie with the dynamic key in cookies-next
            setCookie(cookieKey, trimmedCookie, {
              maxAge: 60,
              expires: new Date(Date.now() + 60 * 60 * 1000),
              httpOnly: true,
              sameSite: "lax",
              path: "/",
            });
          });
        }
        return data;
      } else {
        // This will activate the closest `error.js` Error Boundary
        const errorData = await res.json();
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
  200,
);
