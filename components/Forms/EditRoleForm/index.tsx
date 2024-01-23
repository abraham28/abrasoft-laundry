"use client";

import React from "react";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import styles from "./styles.module.scss";
import { editRoleFormSchema, Inputs } from "./validators";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface EditRoleFormProps {
  id: string;
}

const EditRoleForm: React.FC<EditRoleFormProps> = ({ id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(editRoleFormSchema),
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
        <FormLabel>Role Name</FormLabel>
        <FormControl
          {...register("roleName", { required: true })}
          isInvalid={!!errors.roleName}
        />
        <FormControl.Feedback type="invalid">
          {errors.roleName?.message}
        </FormControl.Feedback>
      </FormGroup>

      <FormGroup>
        <FormLabel>Role Description</FormLabel>
        <FormControl
          {...register("roleDescription", { required: true })}
          isInvalid={!!errors.roleDescription}
        />
        <FormControl.Feedback type="invalid">
          {errors.roleDescription?.message}
        </FormControl.Feedback>
      </FormGroup>
    </Form>
  );
};
export default EditRoleForm;
