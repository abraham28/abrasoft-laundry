"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { companyRegisterFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CompanyRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(companyRegisterFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel>Company Name</FormLabel>
        <FormControl
          placeholder="Company Name"
          {...register("companyName", { required: true })}
          isInvalid={!!errors.companyName}
        />
        <FormControl.Feedback type="invalid">
          {errors.companyName?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Contact Number</FormLabel>
        <FormControl
          placeholder="Company Number"
          {...register("contactNumber", { required: true })}
          isInvalid={!!errors.contactNumber}
        />
        <FormControl.Feedback type="invalid">
          {errors.contactNumber?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormControl
          placeholder="Enter your email"
          {...register("companyEmail", { required: true })}
          isInvalid={!!errors.companyEmail}
        />
        <FormControl.Feedback type="invalid">
          {errors.companyEmail?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Password</FormLabel>
        <FormControl
          placeholder="Enter your password"
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
          placeholder="Re-enter your password"
          type="password"
          {...register("confirmPassword")}
          isInvalid={!!errors.confirmPassword}
        />
        <FormControl.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default CompanyRegisterForm;
