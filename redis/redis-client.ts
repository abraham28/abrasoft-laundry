import { createClient } from "redis";
import { Email } from "./models";
import { generateOTP } from "./utils/generic";
import * as userManagement from "./services/userManagement";

export const redisClient = async () => {
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

const sendOTPviaEmail = async (OTP: number) => {
  // TODO: Add a function to avoid getting spammed for resend

  // TODO: Send an email to user
  console.log(
    `Please verify your email by entering this OTP ${OTP.toString()} in the verification page`,
  );

  return true;
};

const sendOTP: (email: Email) => Promise<boolean | null> = async (email) => {
  const client = await redisClient();
  const existingOTP = await client.get(`otp:${email}`);

  if (!existingOTP) {
    await client.set(`otp:${email}`, generateOTP());
    const newOTP = await client.get(`otp:${email}`);
    if (!newOTP) return false;
    return await sendOTPviaEmail(Number(newOTP));
  } else {
    return await sendOTPviaEmail(Number(existingOTP));
  }
};

const verifyOTP = async ({ email, otp }: { email: string; otp: number }) => {
  const client = await redisClient();
  const existingOTP = await client.get(`otp:${email}`);

  const isValidOTP = Boolean(existingOTP && Number(existingOTP) == otp);

  if (!isValidOTP) return false;

  const userId = await client.get(`user_email:${email}`);
  if (!userId) throw new Error("User ID associated with email not found");

  const response = await client.del(`otp:${email}`);

  if (!response) throw new Error("Error updating data in Redis");

  return true;
};

const redisDb = { ...userManagement, sendOTP, verifyOTP };

export default redisDb;
