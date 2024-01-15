import { createClient } from "redis";
import * as userServices from "./services/userServices";
import * as otpServices from "./services/otpServices";

export const redisClient = async () => {
  const client = await createClient({
    url: process.env.KV_URL,
    socket: {
      tls: process.env.NODE_ENV === "production",
    },
  })
    .on("error", (err) => console.error("Redis Client Error", err))
    .connect();

  return client;
};

const redisDb = { ...userServices, ...otpServices };

export default redisDb;
