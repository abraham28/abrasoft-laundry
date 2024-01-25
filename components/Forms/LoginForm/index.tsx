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
import { loginFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CUSTOMER_DASHBOARD_ROUTE } from "@/app/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((response) => {
        if (response && response.error) {
          try {
            const errorJson = JSON.parse(response.error);
            if (errorJson.emailVerificationLink) {
              router.replace(errorJson.emailVerificationLink);
            }
          } catch (error) {
            setError("root", { message: response.error });
          }
          return;
        }
        router.push(
          searchParams.get("callbackUrl") || CUSTOMER_DASHBOARD_ROUTE,
        );
      })
      .catch((error) => {
        setError("root", { message: error.message });
      });
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

      {errors.root && errors.root.message && (
        <Alert variant={"danger"}>{errors.root?.message}</Alert>
      )}

      <Button type="submit" className="w-100">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
