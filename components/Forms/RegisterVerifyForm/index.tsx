"use client";

import React from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import styles from "./styles.module.scss";
import { registerFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const RegisterVerifyForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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

      <Button
        onClick={() => router.push("/register/verify-email/success")}
        type="submit"
        className="w-100"
      >
        Verify
      </Button>
    </Form>
  );
};

export default RegisterVerifyForm;
