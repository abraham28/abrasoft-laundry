import debounce from "debounce-promise";

export const handleFetchApi: <T>(
  input: RequestInfo,
  init?: RequestInit | undefined,
) => Promise<T> = debounce(
  async (input: RequestInfo, init: RequestInit | undefined) => {
    try {
      const res = await fetch(input, init);

      if (res.ok) {
        const data = await res.json();
        // Check if there's a cookie set in the response
        const setCookieHeader = res.headers.get("Set-Cookie");
        if (setCookieHeader) {
          document.cookie = setCookieHeader; // Set the received cookie in the document
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
