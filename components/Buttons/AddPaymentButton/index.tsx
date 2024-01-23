"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface AddPaymentButtonProps {
  routerPath: string;
}

const AddPaymentButton: React.FC<AddPaymentButtonProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(routerPath)}
      variant="secondary"
      className="w-100"
    >
      Add Payment
    </Button>
  );
};

export default AddPaymentButton;
