import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export const generateJWT = (userData: { email: string }) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  // Check if JWT_SECRET_KEY is set
  if (!secretKey) {
    throw new Error("JWT_SECRET_KEY is not set. Unable to generate JWT token.");
  }

  const token = jwt.sign(userData, secretKey, {
    expiresIn: "30d", // Token expiration time
  });
  return token;
};

// Helper function to hash the password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export function generateUUID(): string {
  return uuidv4();
}
