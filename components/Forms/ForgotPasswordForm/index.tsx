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
import { forgotFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { SET_NEW_PASSWORD_ROUTE } from "@/app/constants";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(forgotFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormControl
          placeholder="Enter your email"
          {...register("email", { required: true })}
          isInvalid={!!errors.email}
        />
        <FormControl.Feedback type="invalid">
          {errors.email?.message}
        </FormControl.Feedback>
      </FormGroup>

      <Button
        onClick={() => router.push(SET_NEW_PASSWORD_ROUTE)}
        type="submit"
        className="w-100"
      >
        Reset Password
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
