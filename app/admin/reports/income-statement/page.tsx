import React from "react";
import styles from "./IncomeStatement.module.scss";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className={styles.container}>
        <h1 style={{ color: "var(--primary)" }}>Income Statement</h1>
      </div>

      <div className={styles.container}>
        <p>Start Date</p>
        <p className={styles.dateWithBgColor}>January 1, 2023</p>
      </div>

      <div className={styles.container}>
        <p>End Date</p>
        <p className={styles.dateWithBgColor}>December 31, 2023</p>
      </div>

      <p>
        <b>Financial Statements</b>
      </p>

      <p>
        <b>Sales</b>
      </p>

      <div className={styles.container}>
        <p>Service Sales</p>
        <p>15,000</p>
      </div>

      <div className={styles.container}>
        <p className={styles.greenText}>
          <b>Sales total</b>
        </p>
        <p className={styles.greenText}>
          <b>15,000</b>
        </p>
      </div>
      <hr />

      <p>
        <b>Expenses</b>
      </p>
      <div>
        <div className={styles.container}>
          <p>Rent</p>
          <p>5,000.00</p>
        </div>

        <div className={styles.container}>
          <p>Salaries &#38; Wages</p>
          <p>.</p>
        </div>

        <div className={styles.container}>
          <p>Employee 1 Salary</p>
          <p>5,000.00</p>
        </div>

        <div className={styles.container}>
          <p>Employee 2 Salary</p>
          <p>5,000.00</p>
        </div>

        <div className={styles.container}>
          <p>
            <b>Salaries & Wages Total</b>
          </p>
          <p>
            <b>8,000.00</b>
          </p>
        </div>

        <div className={styles.container}>
          <p>
            <b className={styles.redText}>Expenses Total</b>
          </p>
          <p>
            <b className={styles.redText}>13,000.00</b>
          </p>
        </div>
      </div>

      <hr />

      <div className={styles.container}>
        <p>
          <b>Operating income</b>
        </p>
        <p className={styles.greenText}>
          <b>2,000</b>
        </p>
      </div>

      <div className={styles.container}>
        <p>
          <b>Other Revenue</b>
        </p>
        <p className={styles.blueText}>0.00</p>
      </div>

      <hr />

      <p>
        <b>Other Expenses</b>
      </p>
      <div className={styles.container}>
        <p>Photocopy Expenses</p>
        <p>300.00</p>
      </div>

      <div className={styles.container}>
        <p className={styles.redText}>
          <b>Other Expenses Total</b>
        </p>
        <p className={styles.redText}>300</p>
      </div>

      <hr />

      <div className={styles.container}>
        <p>
          <b>Net Income</b>
        </p>
        <p>
          <b className={styles.greenText}>1700.00</b>
        </p>
      </div>
    </div>
  );
};

export default Page;
