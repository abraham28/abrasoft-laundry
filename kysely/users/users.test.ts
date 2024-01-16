import { db } from "../database";
import { sql } from "kysely";
import userRepository from "./services";

beforeAll(async () => {
  await db.schema
    .createTable("users")
    .addColumn("user_id", "varchar", (cb) => cb.primaryKey())
    .addColumn("user_email", "varchar", (cb) => cb.notNull())
    .addColumn("user_password", "varchar", (cb) => cb.notNull())
    .addColumn("user_first_name", "varchar")
    .addColumn("user_last_name", "varchar")
    .addColumn("user_contact_number", "varchar")
    .addColumn("user_address", "varchar")
    .addColumn("user_birthday", "timestamp")
    .addColumn("user_email_verified", "boolean", (cb) =>
      cb.notNull().defaultTo(false),
    )
    .addColumn("created_at", "timestamp", (cb) =>
      cb.notNull().defaultTo(sql`now()`),
    )
    .execute();
});

afterEach(async () => {
  await sql`truncate table ${sql.table("users")}`.execute(db);
});

afterAll(async () => {
  await db.schema.dropTable("users").execute();
});

test("User repository should find a user with a given id", async () => {
  try {
    await userRepository.findUserByEmail("test@test.test");
  } catch (error) {
    expect(error).toMatch("error");
  }
});
