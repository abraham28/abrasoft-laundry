export type Email = string;
export type UUID = string;

export interface User {
  user_id: UUID;
  user_email: Email;
  user_password: string;
  user_first_name?: string;
  user_last_name?: string;
  user_contact_number?: string;
  user_address?: string;
  user_birthday?: Date;
}

export interface DB {
  "user:[user_id]": User;
  "user_email:[email]": UUID;
}
