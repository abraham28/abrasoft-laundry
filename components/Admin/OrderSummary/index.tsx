import React from "react";

const OrderSummary = () => {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>
        <p>
          <b>Summary</b>
        </p>
        {/* Add condition and if it has no matches, display "No items" */}
        <div>
          <p className="d-flex justify-content-between">
            <b>
              No items <span>0</span>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
