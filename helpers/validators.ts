import * as Yup from "yup";

export const passwordSchema = Yup.string()
  .required("Password is required")
  .min(6, "Password must be at least 6 characters long")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    "Password must include at least one uppercase letter, one lowercase letter, and one digit",
  );

export const emailSchema = Yup.string()
  .required("Email is required")
  .test(
    "no-double-at",
    "Multiple '@' symbols are not allowed",
    (value?: string) =>
      !value || value.indexOf("@", value.indexOf("@") + 1) === -1,
  )
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}(\.[a-zA-Z]{1,})?$/,
    "Invalid email format",
  );
