import * as Yup from "yup";

export type Inputs = {
  productCategory: string;
  productsOrServices: string;
  productDescription: string;
  productPrice: string;
};

export const editProductsFormSchema: Yup.ObjectSchema<Inputs> =
  Yup.object().shape({
    productCategory: Yup.string().required(
      "Please enter a valid product category.",
    ),
    productsOrServices: Yup.string().required(
      "Please enter a valid products/services.",
    ),
    productDescription: Yup.string().required(
      "Oops! Product description is missing.",
    ),
    productPrice: Yup.string().required("Product price is required."),
  });
