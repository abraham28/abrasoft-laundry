"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface NewCustomerButtonProps {
  routerPath: string;
}

const NewCustomerButton: React.FC<NewCustomerButtonProps> = ({
  routerPath,
}) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      New Customer
    </Button>
  );
};

export default NewCustomerButton;
