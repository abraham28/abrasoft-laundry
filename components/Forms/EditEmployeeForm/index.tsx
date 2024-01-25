"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { editEmployeeSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface EditEmployeeFormProps {
  id: string;
}

const EditEmployeeForm: React.FC<EditEmployeeFormProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(editEmployeeSchema),
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
          <b>Employee Email</b>
        </FormLabel>
        <FormControl
          {...register("roleEmail", { required: true })}
          isInvalid={!!errors.roleEmail}
          placeholder="employeeEmail@email.com"
        />
        <FormControl.Feedback type="invalid">
          {errors.roleEmail?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>
          <b>Role</b>
        </FormLabel>
        <FormControl
          {...register("role", { required: true })}
          isInvalid={!!errors.role}
          placeholder="Company Registration Number"
        />
        <FormControl.Feedback type="invalid">
          {errors.role?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default EditEmployeeForm;
