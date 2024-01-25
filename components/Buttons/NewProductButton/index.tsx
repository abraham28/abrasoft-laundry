"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface NewProductButtonProps {
  routerPath: string;
}

const NewProductButton: React.FC<NewProductButtonProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      New Role
    </Button>
  );
};

export default NewProductButton;
