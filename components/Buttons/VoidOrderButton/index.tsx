"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface VoidOrderProps {
  routerPath: string;
}

const VoidOrder: React.FC<VoidOrderProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="danger">
      Void Order
    </Button>
  );
};

export default VoidOrder;
