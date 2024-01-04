import * as Yup from "yup";

export type Inputs = {
  otp: string;
};

export const registerFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  otp: Yup.string()
    .required("Password is required")
    .min(6, "Password is incorrect"),
});
