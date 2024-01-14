import * as Yup from "yup";

export type Inputs = {
  otp: string;
};

export const emailVerificationOTPSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    otp: Yup.string()
      .required("Please enter your One Time Pin (OTP)")
      .min(6, "Invalid OTP"),
  });
