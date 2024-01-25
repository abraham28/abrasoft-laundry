"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface AddExpensesButtonProps {
  routerPath: string;
}

const AddExpensesButton: React.FC<AddExpensesButtonProps> = ({
  routerPath,
}) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      Add Expenses
    </Button>
  );
};

export default AddExpensesButton;
