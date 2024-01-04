"use client";

import React from "react";
import {
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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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

      <Button type="submit" className="w-100">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
