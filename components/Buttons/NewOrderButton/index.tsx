"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface NewOrderButtonProps {
  routerPath: string;
}

const NewOrderButton: React.FC<NewOrderButtonProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      New Order
    </Button>
  );
};

export default NewOrderButton;
