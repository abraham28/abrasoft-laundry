import { db } from "../database";

const userRepository = {
  findUserByEmail: async (email: string) => {
    return await db
      .selectFrom("users")
      .where("user_email", "=", email)
      .execute();
  },
};

export default userRepository;
