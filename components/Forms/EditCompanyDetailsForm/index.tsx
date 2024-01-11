"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { editCompanyDetailsFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const EditCompanyDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(editCompanyDetailsFormSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel>Company Name</FormLabel>
        <FormControl
          {...register("companyName", { required: true })}
          isInvalid={!!errors.companyName}
        />
        <FormControl.Feedback type="invalid">
          {errors.companyName?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Company Address</FormLabel>
        <FormControl
          {...register("companyAddress", { required: true })}
          isInvalid={!!errors.companyAddress}
        />
        <FormControl.Feedback type="invalid">
          {errors.companyAddress?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Contact Number</FormLabel>
        <FormControl
          {...register("contactNumber", { required: true })}
          isInvalid={!!errors.contactNumber}
        />
        <FormControl.Feedback type="invalid">
          {errors.contactNumber?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Company Email</FormLabel>
        <FormControl
          {...register("companyEmail", { required: true })}
          isInvalid={!!errors.companyEmail}
        />
        <FormControl.Feedback type="invalid">
          {errors.companyEmail?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Company Website</FormLabel>
        <FormControl
          {...register("companyWebsite", { required: true })}
          isInvalid={!!errors.companyWebsite}
        />
        <FormControl.Feedback type="invalid">
          {errors.companyWebsite?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Company TIN</FormLabel>
        <FormControl
          {...register("companyTin", { required: true })}
          isInvalid={!!errors.companyTin}
        />
        <FormControl.Feedback type="invalid">
          {errors.companyTin?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>DTI / SEC Registration</FormLabel>
        <FormControl
          {...register("DTI", { required: true })}
          isInvalid={!!errors.DTI}
        />
        <FormControl.Feedback type="invalid">
          {errors.DTI?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default EditCompanyDetailsForm;
