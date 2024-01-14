import { createClient } from "redis";
import { Email, UUID, User } from "./models";
import { generateOTP } from "./helpers";

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

const userToKv = (data: User): Record<string, string | number | Buffer> => {
  const { user_email_verified, ...restData } = data;

  const encodedData: Record<string, string | number | Buffer> = {
    user_email_verified: user_email_verified ? 1 : 0,
  };

  Object.entries(restData).forEach(([key, value]) => {
    if (value !== undefined) {
      if (value instanceof Date) {
        encodedData[key] = value.toString();
      } else {
        encodedData[key] = value;
      }
    }
  });

  return encodedData;
};

const kvToUser: (data: Record<string, string>) => User = (data) => ({
  user_id: data["user_id"],
  user_email: data["user_email"],
  user_password: data["user_password"],
  user_first_name: data["user_first_name"],
  user_last_name: data["user_last_name"],
  user_contact_number: data["user_contact_number"],
  user_address: data["user_address"],
  user_birthday: new Date(data["user_birthday"]),
  user_email_verified: Boolean(
    data["user_email_verified"] && Number(data["user_email_verified"]) === 1,
  ),
});

const getUserIdByEmail = async (email: Email) => {
  const client = await redisClient();
  const userIdResult = await client.get(`user_email:${email}`);
  client.disconnect();
  return userIdResult;
};

const getUserById = async (userId: UUID) => {
  const client = await redisClient();
  const userResponse = await client.hGetAll(`user:${userId}`);
  client.disconnect();
  if (!userResponse) return null;
  const user: User = kvToUser(userResponse);
  return user;
};

const getUserByEmail = async (email: Email) => {
  const client = await redisClient();
  const userId = await client.get(`user_email:${email}`);
  client.disconnect();
  if (!userId) return null;
  return await getUserById(userId);
};

const isEmailVerified = async (email: Email) => {
  const client = await redisClient();
  const userIdResult = await getUserIdByEmail(email);
  if (!userIdResult) return false;

  const isEmailVerified = await client.hGet(
    `user:${userIdResult}`,
    "user_email_verified",
  );
  client.disconnect();
  return Boolean(isEmailVerified && Number(isEmailVerified) === 1);
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

  const response = await client
    .multi()
    .hSet(`user:${userId}`, "user_email_verified", 1)
    .del(`otp:${email}`)
    .exec();

  if (response.every((result) => !result))
    throw new Error("Error updating data in Redis");

  return true;
};

const createUser: (user: User) => Promise<User | null> = async (user) => {
  const client = await redisClient();
  const createKvUserResults = await client.executeIsolated(
    async (isolatedClient) => {
      await isolatedClient.watch(`user_email:${user.user_email}`);

      const result = await isolatedClient
        .multi()
        .set(`user_email:${user.user_email}`, user.user_id)
        .hSet(`user:${user.user_id}`, userToKv(user))
        .exec();

      isolatedClient.disconnect();
      return result;
    },
  );
  client.disconnect();
  if (createKvUserResults.every((result) => !result)) return null;
  return user;
};

const redisDb = {
  getUserByEmail,
  getUserById,
  isEmailVerified,
  getUserIdByEmail,
  createUser,
  sendOTP,
  verifyOTP,
};

export default redisDb;
