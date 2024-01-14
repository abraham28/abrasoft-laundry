import { createClient } from "redis";

const redisClient = async () => {
  const client = await createClient({
    url: process.env.KV_URL,
    socket: {
      tls: process.env.NODE_ENV === "production",
    },
  })
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  return client;
};

export default redisClient;
