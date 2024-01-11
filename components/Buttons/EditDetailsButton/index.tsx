"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface EditDetailsButtonProps {
  routerPath: string;
}

const EditDetailsButton: React.FC<EditDetailsButtonProps> = ({
  routerPath,
}) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      Edit Details
    </Button>
  );
};

export default EditDetailsButton;
