import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface UserTable {
  user_id: string;
  user_email: string;
  user_password: string;
  user_first_name: string | null;
  user_last_name: string | null;
  user_contact_number: string | null;
  user_address: string | null;
  user_birthday: Date | null;
  user_email_verified: boolean | null;
  created_at: ColumnType<Date, Generated<Date>, never>;
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;
