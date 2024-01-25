"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { utilitiesAmoutFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface UtilitiesAmountFormProps {
  id: string;
}

const UtilitiesAmountForm: React.FC<UtilitiesAmountFormProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(utilitiesAmoutFormSchema),
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
          <b>Utilities</b>
        </FormLabel>
        <FormControl
          {...register("utilities", { required: true })}
          isInvalid={!!errors.utilities}
          placeholder="100,000.00"
        />
        <FormControl.Feedback type="invalid">
          {errors.utilities?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default UtilitiesAmountForm;
