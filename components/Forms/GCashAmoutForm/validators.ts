import * as Yup from "yup";

export type Inputs = {
  gCashAmount: string;
};

export const cashAmoutFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape(
  {
    gCashAmount: Yup.string().required("Oops! Role name is missing."),
  },
);
