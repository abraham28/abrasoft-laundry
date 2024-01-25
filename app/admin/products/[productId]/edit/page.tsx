import SaveButton from "@/components/Buttons/SaveButton";
import EditProductsForm from "@/components/Forms/EditProductsForm";
import React from "react";
import { Image } from "react-bootstrap";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }}>Products Management</h1>

      <div className="d-flex justify-content-between">
        <p>
          <b>Products Details</b>
        </p>
        <SaveButton buttonType="submit" form="EditProductsForm" />
      </div>
      <div className="mx-auto">
        <Image src="https://unsplash.it/180/180" alt="Product Image" />
      </div>
      <EditProductsForm id="EditProductsForm" />
    </div>
  );
};

export default Page;
