import { Kysely, PostgresDialect } from "kysely";
import { Database } from "./types";
import { Pool } from "pg";

const dialect = new PostgresDialect({
  pool: async () =>
    new Pool({
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      port: process.env.POSTGRES_PORT
        ? Number(process.env.POSTGRES_PORT)
        : undefined,
      max: 10,
    }),
});

export const db = new Kysely<Database>({
  dialect,
});
