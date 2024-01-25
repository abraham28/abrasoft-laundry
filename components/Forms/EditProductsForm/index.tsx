"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { editProductsFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface EditProductsFormProps {
  id: string;
}

const EditProductsForm: React.FC<EditProductsFormProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(editProductsFormSchema),
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
          <b>Product Category</b>
        </FormLabel>
        <FormControl
          {...register("productCategory", { required: true })}
          isInvalid={!!errors.productCategory}
        />
        <FormControl.Feedback type="invalid">
          {errors.productCategory?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <b>Product/Services Name</b>
        </FormLabel>
        <FormControl
          {...register("productsOrServices", { required: true })}
          isInvalid={!!errors.productsOrServices}
        />
        <FormControl.Feedback type="invalid">
          {errors.productsOrServices?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <b>Product Description</b>
        </FormLabel>
        <FormControl
          {...register("productDescription", { required: true })}
          isInvalid={!!errors.productDescription}
        />
        <FormControl.Feedback type="invalid">
          {errors.productDescription?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <b>Product Price</b>
        </FormLabel>
        <FormControl
          {...register("productPrice", { required: true })}
          isInvalid={!!errors.productPrice}
        />
        <FormControl.Feedback type="invalid">
          {errors.productPrice?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default EditProductsForm;
