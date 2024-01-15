import { Email, UUID, User } from "@/redis/models";
import { kvToUser, userToKv } from "@/redis/utils/user-helpers";
import { redisClient } from "@/redis/redis-client";

export const getUserIdByEmail = async (email: Email) => {
  const client = await redisClient();
  const userIdResult = await client.get(`user_email:${email}`);
  client.disconnect();
  return userIdResult;
};

export const getUserById = async (userId: UUID) => {
  const client = await redisClient();
  const userResponse = await client.hGetAll(`user:${userId}`);
  client.disconnect();
  if (!userResponse) return null;
  const user: User = kvToUser(userResponse);
  return user;
};

export const getUserByEmail = async (email: Email) => {
  const client = await redisClient();
  const userId = await client.get(`user_email:${email}`);
  client.disconnect();
  if (!userId) return null;
  return await getUserById(userId);
};

export const isUserEmailVerified = async (email: Email) => {
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

export const setUserVerified = async (email: Email) => {
  const client = await redisClient();
  const userId = await client.get(`user_email:${email}`);
  if (!userId) throw new Error("cannot find user id");
  const success = await client.hSet(`user:${userId}`, "user_email_verified", 1);
  client.disconnect();
  return !success;
};

export const createUser: (user: User) => Promise<User | null> = async (
  user,
) => {
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
