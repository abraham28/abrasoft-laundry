import { emailSchema } from "@/helpers/validators";
import * as Yup from "yup";

export type Inputs = {
  roleEmail: string;
  role: string;
};

export const editEmployeeSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  roleEmail: emailSchema,
  role: Yup.string().required("Oops! Company Registration Number is missing."),
});
