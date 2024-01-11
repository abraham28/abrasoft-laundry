"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface EditHeaderButtonProps {
  routerPath: string;
}

const EditHeaderButton: React.FC<EditHeaderButtonProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="primary">
      Edit Header
    </Button>
  );
};

export default EditHeaderButton;
