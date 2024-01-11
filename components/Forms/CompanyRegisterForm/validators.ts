import { emailSchema, passwordSchema } from "@/helpers/validators";
import * as Yup from "yup";

export type Inputs = {
  companyName: string;
  companyAddress: string;
  contactNumber: string;
  companyEmail: string;
  password: string;
  confirmPassword: string;
};

export const companyRegisterFormSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    companyName: Yup.string().required("Oops! First name is missing."),
    companyAddress: Yup.string().required("Oops! Last name is missing."),
    contactNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Invalid phone number"),
    companyEmail: emailSchema,
    password: passwordSchema,
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
