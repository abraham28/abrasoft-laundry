import * as Yup from "yup";

export type Inputs = {
  password: string;
  confirmPassword: string;
};

export const forgotFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is incorrect"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match")
    .min(6, "Password is incorrect"),
});
