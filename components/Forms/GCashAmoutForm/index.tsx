"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { cashAmoutFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface GCashAmountFormProps {
  id: string;
}

const GCashAmountForm: React.FC<GCashAmountFormProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(cashAmoutFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form
      className={styles.form}
      id={id}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <FormLabel>
          <b>GCash Amount</b>
        </FormLabel>
        <FormControl
          {...register("gCashAmount", { required: true })}
          isInvalid={!!errors.gCashAmount}
          placeholder="1000,000.00"
        />
        <FormControl.Feedback type="invalid">
          {errors.gCashAmount?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default GCashAmountForm;