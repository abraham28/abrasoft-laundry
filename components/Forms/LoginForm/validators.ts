import { emailSchema } from "@/helpers/validators";
import * as Yup from "yup";

export type Inputs = {
  email: string;
  password: string;
  remember?: boolean;
};

export const loginFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  email: emailSchema,
  password: Yup.string().required("Password is required"),
  remember: Yup.boolean().optional(),
});
