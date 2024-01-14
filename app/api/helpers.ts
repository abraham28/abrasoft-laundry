import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export function generateUUID(): string {
  return uuidv4();
}

export const generateOTP = (): number => {
  const min = 100000;
  const max = 999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
