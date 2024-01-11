import React from "react";

const OrderDeduction = () => {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div>
        <p>
          <b>Less&#58;</b>
        </p>
        {/* Add condition and if it has no matches, display "No payment has been made" */}
        <p className="d-flex justify-content-between">
          <b>
            No payment has been made <span>0</span>
          </b>
        </p>
        <p className="d-flex justify-content-between">
          <b>
            Amount Due <span>222.00</span>
          </b>
        </p>
      </div>
    </div>
  );
};

export default OrderDeduction;
