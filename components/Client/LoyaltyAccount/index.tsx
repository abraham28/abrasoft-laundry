import React from "react";
import CustomerPointsBalance from "../PointsHistory";

const LoyaltyAccount = () => {
  return (
    <div>
      <h3 style={{ color: "var(--dark)" }}>Customer Name</h3>
      <p>Loyalty Account</p>
      <div className="text-end">
        <p className="text-muted">Your balance</p>
        <CustomerPointsBalance />
      </div>
    </div>
  );
};

export default LoyaltyAccount;
