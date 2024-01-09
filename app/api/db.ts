// db.ts
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

let pool: Pool | null = null; // Define a global pool variable

// Function to create a new database pool instance
export const createPool = (): Pool => {
  const requiredVariables = ["DB_USER", "DB_HOST", "DB_NAME", "DB_PASSWORD"];
  const missingVariables = requiredVariables.filter(
    (variable) => !process.env[variable],
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVariables.join(", ")}`,
    );
  }

  pool = new Pool({
    user: process.env.DB_USER!,
    host: process.env.DB_HOST!,
    database: process.env.DB_NAME!,
    password: process.env.DB_PASSWORD!,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  });

  return pool;
};

// Function to end the database pool
export const endPool = async (): Promise<void> => {
  if (pool) {
    await pool.end();
  }
};
