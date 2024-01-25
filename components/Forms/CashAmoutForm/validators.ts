import * as Yup from "yup";

export type Inputs = {
  cashAmount: string;
};

export const cashAmoutFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape(
  {
    cashAmount: Yup.string().required("Oops! Role name is missing."),
  },
);
