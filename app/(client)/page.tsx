import LoyaltyAccount from "@/components/Client/LoyaltyAccount";
import OrderHistory from "@/components/Client/OrderHistory";
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
      <OrderHistory />
    </div>
  );
};

export default Page;
