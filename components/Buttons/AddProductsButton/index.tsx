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
      variant="secondary"
      className="w-100"
    >
      Add Products
    </Button>
  );
};

export default AddProductsButton;
