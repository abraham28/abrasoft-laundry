import * as Yup from "yup";

export type Inputs = {
  utilities: string;
};

export const utilitiesAmoutFormSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    utilities: Yup.string().required("Oops! Role name is missing."),
  });
