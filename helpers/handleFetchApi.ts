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
        return data;
      } else {
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
