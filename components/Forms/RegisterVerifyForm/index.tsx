"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import styles from "./styles.module.scss";
import { emailVerificationOTPSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { handleFetchApi } from "@/helpers/handleFetchApi";
import {
  API_VERIFY_EMAIL_RESEND_URL,
  API_VERIFY_EMAIL_URL,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
} from "@/app/constants";
import ResendButton from "./ResendOtpButton";

const RegisterVerifyForm: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const emailParam = params.get("email");
  const initialResendSeconds = 60;
  const [resendSeconds, setResendSeconds] =
    useState<number>(initialResendSeconds);
  const [decryptedEmail, setDecryptedEmail] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<Inputs>({
    resolver: yupResolver(emailVerificationOTPSchema),
  });

  useEffect(() => {
    const checkEmail = async () => {
      if (!emailParam) {
        router.replace(NOT_FOUND_ROUTE);
        return;
      }
      const email = atob(emailParam);
      setDecryptedEmail(email);
    };

    checkEmail();
  }, [emailParam, router]);

  useEffect(() => {
    const interval = setInterval(() => {
      setResendSeconds((prevSeconds) =>
        prevSeconds > 0 ? prevSeconds - 1 : 0,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!decryptedEmail) {
      return; // Handle error or redirect, if necessary
    }

    await handleFetchApi(API_VERIFY_EMAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, email: decryptedEmail }),
    })
      .then(() => router.push(LOGIN_ROUTE))
      .catch((error) => setError("root", { message: error.message }));
  };

  const resendOTP = useCallback(async () => {
    if (!decryptedEmail) {
      return; // Handle error or redirect, if necessary
    }

    await handleFetchApi(API_VERIFY_EMAIL_RESEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: decryptedEmail }),
    })
      .then(() => clearErrors())
      .catch((error) => setError("root", { message: error.message }))
      .finally(() => setResendSeconds(initialResendSeconds));
  }, [clearErrors, decryptedEmail, setError]);

  useEffect(() => {
    resendOTP();
  }, [resendOTP]);

  return (
    <Form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel>One Time Pin &#40;OTP&#41;</FormLabel>
        <FormControl
          placeholder="Enter your OTP"
          {...register("otp", { required: true })}
          isInvalid={!!errors.otp}
        />
        <FormControl.Feedback type="invalid">
          {errors.otp?.message}
        </FormControl.Feedback>
      </FormGroup>

      {errors.root && errors.root.message && (
        <Alert variant={"danger"}>{errors.root?.message}</Alert>
      )}

      <Button type="submit" className="w-100">
        Verify
      </Button>

      <p>
        Tip&#58; Check your spam folder if you do not see OTP in your email
        inbox
      </p>
      <p>
        Did not receive your OTP?&nbsp;
        <ResendButton
          onClick={resendOTP}
          disabled={resendSeconds > 0}
          countdown={resendSeconds}
        />
      </p>
    </Form>
  );
};

export default RegisterVerifyForm;
