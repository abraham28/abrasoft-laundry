import * as Yup from "yup";

export type Inputs = {
  vendorName: string;
  description: string;
};

export const editVendorFormSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    vendorName: Yup.string().required("Oops! Vendor name is missing."),
    description: Yup.string().required(""),
  });
