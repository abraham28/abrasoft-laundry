"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { editVendorFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface EditVendorFormProps {
  id: string;
}

const EditVendorForm: React.FC<EditVendorFormProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(editVendorFormSchema),
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
          <b>Vendor Name</b>
        </FormLabel>
        <FormControl
          {...register("vendorName", { required: true })}
          isInvalid={!!errors.vendorName}
          placeholder="Maynilad, Meralco, etc..."
        />
        <FormControl.Feedback type="invalid">
          {errors.vendorName?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <b>Description</b> &#40;optional&#41;
        </FormLabel>
        <FormControl
          {...(register("description"), { required: false })}
          isInvalid={!!errors.description}
          placeholder="Payment for water bills"
        />
        <FormControl.Feedback type="invalid">
          {errors.description?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default EditVendorForm;
