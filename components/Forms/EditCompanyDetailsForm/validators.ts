import * as Yup from "yup";

export type Inputs = {
  companyName: string;
  companyAddress: string;
  contactNumber: string;
  companyEmail: string;
  companyWebsite: string;
  companyTin: string;
  DTI: string;
};

export const editCompanyDetailsFormSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    companyName: Yup.string().required("Oops! First name is missing."),
    companyAddress: Yup.string().required("Oops! Last name is missing."),
    contactNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Invalid phone number"),
    companyEmail: Yup.string()
      .required("Email is required")
      .test(
        "no-double-at",
        "Multiple '@' symbols are not allowed",
        (value?: string) =>
          !value || value.indexOf("@", value.indexOf("@") + 1) === -1,
      )
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}(\.[a-zA-Z]{1,})?$/,
        "Invalid email format",
      ),
    companyWebsite: Yup.string()
      .required("Company Website is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+\.[a-zA-Z]{1,}(\.[a-zA-Z]{1,})?$/,
        "Invalid email format",
      ),
    companyTin: Yup.string().required("Oops! Address is required."),
    DTI: Yup.string().required("Oops! Address is required."),
  });
