import React from "react";

const OrderHistory = () => {
  return (
    <div>
      <p style={{ fontWeight: "var(--text-bold)" }}>
        Mon &#44; December 25 &#44; 1:24PM
      </p>
      <p style={{ fontWeight: "var(--text-bold)" }}>
        Status&#58;{" "}
        <span style={{ fontWeight: "var(--text-normal)" }}>Ongoing</span>
      </p>
      <p style={{ fontWeight: "var(--text-bold)" }}>
        Order Amount&#58;{" "}
        <span style={{ fontWeight: "var(--text-normal)" }}>188.00</span>
      </p>
    </div>
  );
};

export default OrderHistory;
