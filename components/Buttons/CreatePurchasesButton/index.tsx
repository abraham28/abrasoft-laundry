"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface CreatePurchasesButtonProps {
  routerPath: string;
}

const CreatePurchasesButton: React.FC<CreatePurchasesButtonProps> = ({
  routerPath,
}) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      Create a purchase
    </Button>
  );
};

export default CreatePurchasesButton;
