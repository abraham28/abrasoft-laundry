import * as Yup from "yup";

export type Inputs = {
  gcashAmount: string;
};

export const gcashAmountFormSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    gcashAmount: Yup.string().required("Oops! Role name is missing."),
  });
