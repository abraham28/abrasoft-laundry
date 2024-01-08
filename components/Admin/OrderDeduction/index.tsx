import { PAYMENTS_ROUTE } from "@/app/constants";
import AddPaymentButton from "@/components/Buttons/AddPaymentButton";
import React from "react";

const OrderDeduction = () => {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>
        <p style={{ fontWeight: "var(--text-bold)" }}>Less&#58;</p>
        {/* Add condition and if it has no matches, display "No payment has been made" */}
        <p
          style={{ fontWeight: "var(--text-bold)" }}
          className="d-flex justify-content-between"
        >
          No payment has been made <span>0</span>
        </p>
        <p
          style={{ fontWeight: "var(--text-bold)" }}
          className="d-flex justify-content-between"
        >
          Amount Due <span>222.00</span>
        </p>
        <AddPaymentButton routerPath={PAYMENTS_ROUTE} />
      </div>
    </div>
  );
};

export default OrderDeduction;
