"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface EditRoleButtonProps {
  routerPath: string;
}

const EditRoleButton: React.FC<EditRoleButtonProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      Edit
    </Button>
  );
};

export default EditRoleButton;
