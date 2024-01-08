import { EMPLOYEE_PRODUCTS_ROUTE } from "@/app/constants";
import AddProductsButton from "@/components/Buttons/AddProductsButton";
import React from "react";

const OrderSummary = () => {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>
        <p style={{ fontWeight: "var(--text-bold)" }}>Summary</p>
        {/* Add condition and if it has no matches, display "No items" */}
        <div>
          <p
            style={{ fontWeight: "var(--text-bold)" }}
            className="d-flex justify-content-between"
          >
            No items <span>0</span>
          </p>
        </div>
      </div>

      <AddProductsButton routerPath={EMPLOYEE_PRODUCTS_ROUTE} />
    </div>
  );
};

export default OrderSummary;
