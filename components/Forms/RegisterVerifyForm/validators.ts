import * as Yup from "yup";

export type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  email: Yup.string()
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
    ),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is incorrect"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match")
    .min(6, "Password is incorrect"),
});
