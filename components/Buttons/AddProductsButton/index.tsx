"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface AddProductsButtonProps {
  routerPath: string;
}

const AddProductsButton: React.FC<AddProductsButtonProps> = ({
  routerPath,
}) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(routerPath)}
      style={{
        backgroundColor: "var(--secondary)",
        color: "var(--light)",
        textDecoration: "none",
      }}
      variant="link"
      className="w-100"
    >
      Add Products
    </Button>
  );
};

export default AddProductsButton;
