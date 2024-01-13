"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

const CancelButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant="danger" className="w-100">
      Cancel
    </Button>
  );
};

export default CancelButton;
