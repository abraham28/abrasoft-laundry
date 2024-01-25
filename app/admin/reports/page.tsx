import React from "react";
import styles from "./Reports.module.scss";
import Link from "next/link";
import { INCOME_STATEMENT_ROUTE } from "@/app/constants";

const financialStatements = [
  { title: "Income Statement", link: `${INCOME_STATEMENT_ROUTE}` },
  { title: "Balance Sheet", link: "#" },
  { title: "Cashflow Statement", link: "#" },
  { title: "Statement of Changes in Equity", link: "#" },
];

const accounting = [
  { title: "Taxes Invoced", link: "" },
  { title: "General Ledger", link: "" },
  { title: "General Journal", link: "" },
  { title: "Trial Balance", link: "" },
];

const sales = [
  { title: "Accounts Receivable", link: "" },
  { title: "Sales Summary", link: "" },
  { title: "Orders Summary", link: "" },
];

const expenses = [
  { title: "Expense Summary", link: "" },
  { title: "Salaries Summary", link: "" },
];

const general = [
  { title: "Top Customers", link: "" },
  { title: "Employee Payslip", link: "" },
  { title: "Employee Attendance", link: "" },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Reports Generator</h1>
      </div>
      <div>
        <p>
          <b>Financial Statements</b>
        </p>
        {financialStatements.map((dataItem) => {
          return (
            <Link
              href={dataItem.link}
              className={styles.items}
              key={dataItem.title}
            >
              <b>{dataItem.title}</b>
            </Link>
          );
        })}
      </div>

      <div>
        <p>
          <b>Accounting</b>
        </p>
        {accounting.map((dataItem) => {
          return (
            <Link
              href={dataItem.link}
              className={styles.items}
              key={dataItem.title}
            >
              <b>{dataItem.title}</b>
            </Link>
          );
        })}
      </div>

      <div>
        <p>
          <b>Sales</b>
        </p>
        {sales.map((dataItem) => {
          return (
            <Link
              href={dataItem.link}
              className={styles.items}
              key={dataItem.title}
            >
              <b>{dataItem.title}</b>
            </Link>
          );
        })}
      </div>

      <div>
        <p>
          <b>Expenses</b>
        </p>
        {expenses.map((dataItem) => {
          return (
            <Link
              href={dataItem.link}
              className={styles.items}
              key={dataItem.title}
            >
              <b>{dataItem.title}</b>
            </Link>
          );
        })}
      </div>

      <div>
        <p>
          <b>General</b>
        </p>
        {general.map((dataItem) => {
          return (
            <Link
              href={dataItem.link}
              className={styles.items}
              key={dataItem.title}
            >
              <b>{dataItem.title}</b>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
