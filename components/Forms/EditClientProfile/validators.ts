import * as Yup from "yup";

export type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  contactNumber: string;
  address: string;
};

export const editClientProfileSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    firstName: Yup.string().required("Oops! First name is missing."),
    lastName: Yup.string().required("Oops! Last name is missing."),
    email: Yup.string()
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
    birthday: Yup.string().required("Oops! Birthday is missing."),
    contactNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]+$/, "Invalid phone number"),
    address: Yup.string().required("Oops! Address is required."),
  });
