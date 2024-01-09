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

const NewPasswordForm = () => {
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
        <FormLabel>New Password</FormLabel>
        <FormControl
          type="password"
          placeholder="Enter your new password"
          {...register("password", { required: true })}
          isInvalid={!!errors.password}
        />
        <FormControl.Feedback type="invalid">
          {errors.password?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Confirm Password</FormLabel>
        <FormControl
          type="password"
          placeholder="Re-enter your new password"
          {...register("confirmPassword", { required: true })}
          isInvalid={!!errors.confirmPassword}
        />
        <FormControl.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </FormControl.Feedback>
      </FormGroup>

      <Button
        onClick={() =>
          router.push("/forgot-password/verify-email/new-password/success")
        }
        type="submit"
        className="w-100"
      >
        Set a new password
      </Button>
    </Form>
  );
};

export default NewPasswordForm;
