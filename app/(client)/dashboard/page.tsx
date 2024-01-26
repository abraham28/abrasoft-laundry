import LoyaltyAccount from "@/components/Client/LoyaltyAccount";
import OrderDetails from "@/components/Client/OrderDetails";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1
        style={{ color: "var(--primary)" }}
        className="text-start text-md-center my-3"
      >
        Dashboard
      </h1>
      <LoyaltyAccount />
      <p>History</p>
      <OrderDetails />
    </div>
  );
};

export default Page;
