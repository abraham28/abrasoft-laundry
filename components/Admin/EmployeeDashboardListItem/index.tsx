import React from "react";
import styles from "./EmployeeDashboardListItem.module.scss";

const EmployeeDashboardListItem = () => {
  return (
    <div className="d-flex justify-content-between">
      <p className={styles.pBold}>Customer Name</p>
      <div className="text-end">
        <p className={styles.pBold}>
          Payment&#58; <span className={styles.pNormal}>No balance due</span>
        </p>
        <p className={styles.pBold}>
          Total Spent&#58; <span className={styles.pNormal}>1,000.00</span>
        </p>
      </div>
    </div>
  );
};

export default EmployeeDashboardListItem;
