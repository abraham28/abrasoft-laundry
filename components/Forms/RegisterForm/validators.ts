import { emailSchema, passwordSchema } from "@/helpers/validators";
import * as Yup from "yup";

export type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
