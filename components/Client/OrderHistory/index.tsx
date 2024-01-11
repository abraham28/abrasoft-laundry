import React from "react";

const OrderHistory = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ color: "var(--dark)" }}>#OR0152</h3>
        <h4 style={{ color: "var(--danger)" }}>-302 Points</h4>
      </div>
      <div className="text-start">
        <p className="text-muted">December 25, 2025</p>
      </div>
    </div>
  );
};

export default OrderHistory;
