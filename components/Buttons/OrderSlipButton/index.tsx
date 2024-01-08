"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

interface OrderSlipButtonProps {
  routerPath: string;
}

const OrderSlipButton: React.FC<OrderSlipButtonProps> = ({ routerPath }) => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(routerPath)} variant="success">
      Order Slip
    </Button>
  );
};

export default OrderSlipButton;
