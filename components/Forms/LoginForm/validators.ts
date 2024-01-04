import * as Yup from "yup";

export type Inputs = {
  email: string;
  password: string;
  remember?: boolean;
};

export const loginFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
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
  remember: Yup.boolean().optional(),
});
