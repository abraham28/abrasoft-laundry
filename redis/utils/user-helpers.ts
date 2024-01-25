import { User } from "../models";

export const userToKv = (
  data: User,
): Record<string, string | number | Buffer> => {
  const { user_email_verified, ...restData } = data;

  const encodedData: Record<string, string | number | Buffer> = {
    user_email_verified: user_email_verified ? 1 : 0,
  };

  Object.entries(restData).forEach(([key, value]) => {
    if (value !== undefined) {
      if (value instanceof Date) {
        encodedData[key] = value.toString();
      } else {
        encodedData[key] = value;
      }
    }
  });

  return encodedData;
};

export const kvToUser: (data: Record<string, string>) => User = (data) => ({
  user_id: data["user_id"],
  user_email: data["user_email"],
  user_password: data["user_password"],
  user_first_name: data["user_first_name"],
  user_last_name: data["user_last_name"],
  user_contact_number: data["user_contact_number"],
  user_address: data["user_address"],
  user_birthday: new Date(data["user_birthday"]),
  user_email_verified: Boolean(
    data["user_email_verified"] && Number(data["user_email_verified"]) ? 1 : 0,
  ),
});
