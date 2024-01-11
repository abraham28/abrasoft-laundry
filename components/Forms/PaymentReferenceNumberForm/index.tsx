"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { registerFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const PaymentReferenceNumberForm = () => {
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
        <FormLabel>Payment Reference Number for Online Payments</FormLabel>
        <FormControl
          placeholder="Reference Number"
          {...register("referenceNum", { required: true })}
          isInvalid={!!errors.referenceNum}
        />
        <FormControl.Feedback type="invalid">
          {errors.referenceNum?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};

export default PaymentReferenceNumberForm;
