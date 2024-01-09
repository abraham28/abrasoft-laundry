"use client";

import React from "react";
import {
  Alert,
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
import { handleFetchApi } from "@/helpers/handleFetchApi";

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleFetchApi("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => router.push("register/verify-email"))
      .catch((error) => setError("root", { message: error.message }));
  };

  return (
    <Form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormControl
          type="email"
          {...register("email", { required: true })}
          isInvalid={!!errors.email}
        />
        <FormControl.Feedback type="invalid">
          {errors.email?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Password</FormLabel>
        <FormControl
          type="password"
          {...register("password")}
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
          {...register("confirmPassword")}
          isInvalid={!!errors.confirmPassword}
        />
        <FormControl.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </FormControl.Feedback>
      </FormGroup>

      {errors.root && errors.root.message && (
        <Alert variant={"danger"}>{errors.root?.message}</Alert>
      )}

      <Button type="submit" className="w-100">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
