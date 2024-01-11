import * as Yup from "yup";

export type Inputs = {
  referenceNum: string;
};

export const registerFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  referenceNum: Yup.string()
    .required(
      "Error: Reference Number is required for [Gcash, Bank, Paymaya and Others.]",
    )
    .min(10, "Reference number is too short."),
});
