"use client";

import React from "react";
import {
  Alert,
  Button,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import styles from "./styles.module.scss";
import { loginFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CUSTOMER_DASHBOARD_ROUTE } from "@/app/constants";
import { useRouter } from "next/navigation";
import { handleFetchApi } from "@/helpers/handleFetchApi";

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    handleFetchApi("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => router.push(CUSTOMER_DASHBOARD_ROUTE))
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

      <FormGroup className="d-flex gap-1">
        <FormCheck
          id="remember"
          type="checkbox"
          {...register("remember")}
          isInvalid={!!errors.remember}
        />
        <FormLabel style={{ margin: 0 }} htmlFor="remember">
          Remember this device
        </FormLabel>
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
