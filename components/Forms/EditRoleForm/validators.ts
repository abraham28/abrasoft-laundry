import * as Yup from "yup";

export type Inputs = {
  roleName: string;
  roleDescription: string;
};

export const editRoleFormSchema: Yup.ObjectSchema<Inputs> = Yup.object().shape({
  roleName: Yup.string().required("Oops! Role name is missing."),
  roleDescription: Yup.string().required("Oops! Role description is missing."),
});
