import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abrasoft Laundry Management App | Streamlined Laundry",
    short_name: "Abrasoft Laundry",
    description:
      "Abrasoft Laundry Management App is designed to streamline laundry management.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      { type: "image/x-icon", src: "/favicon.ico" },
      { type: "image/png", sizes: "16x16", src: "/favicon-16x16.png" },
      { type: "image/png", sizes: "32x32", src: "/favicon-32x32.png" },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
