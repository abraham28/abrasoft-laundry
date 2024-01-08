"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

const NewCustomerButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("profile/edit")} variant="primary">
      New Customer
    </Button>
  );
};

export default NewCustomerButton;
