import React from "react";
import OrderDetails from "@/components/Client/OrderDetails";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }}>Order History</h1>
      <h4>List of your orders</h4>
      <OrderDetails />
    </div>
  );
};

export default Page;
