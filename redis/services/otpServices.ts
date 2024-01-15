import { Email } from "../models";
import { redisClient } from "../redis-client";
import { generateOTP } from "../utils/generic";

const sendOTPviaEmail = async (OTP: number) => {
  // TODO: Add a function to avoid getting spammed for resend

  // TODO: Send an email to user
  console.info(
    `Please verify your email by entering this OTP ${OTP.toString()} in the verification page`,
  );

  return true;
};

export const sendOTP: (email: Email) => Promise<boolean | null> = async (
  email,
) => {
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

export const verifyOTP = async ({
  email,
  otp,
}: {
  email: string;
  otp: number;
}) => {
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
