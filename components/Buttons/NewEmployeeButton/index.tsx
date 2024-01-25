"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface NewRoleButtonProps {
  routerPath: string;
}

const NewRoleButton: React.FC<NewRoleButtonProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      New Employee
    </Button>
  );
};

export default NewRoleButton;
