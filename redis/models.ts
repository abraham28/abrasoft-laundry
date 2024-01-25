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
  user_email_verified?: boolean;
}

export interface Comapny {
  company_id: UUID;
  company_name: string;
  company_address: string;
  company_logo: string;
}

export type Role = {
  role_id: UUID;
  role_name: string;
  company_id: Comapny["company_id"];
};

export interface Permission {
  permission_id: UUID;
  permission_name: string;
  company_id: Comapny["company_id"];
}

export interface DB {
  "user:[user_id]": User;
  "user_roles[user_id]": Role["role_id"][];
  "role:[role_id]": Role;
  "company:[company_id]": Comapny;
  "permission:[permission_id]": Permission;
  "user_email:[email]": UUID;
  "otp:[email]": number;
}
