import { PAYMENT_AMOUNT_ROUTE } from "@/app/constants";
import SearchBar from "@/components/Admin/SearchBar";
import SaveButton from "@/components/Buttons/SaveButton";
import React from "react";
import styles from "./Payment.module.scss";
import Link from "next/link";

const paymentMethods = ["Cash", "GCash", "Bank", "Redeem Points"];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Payment Methods</h1>
        <SaveButton />
      </div>
      <SearchBar />
      <p>Methods</p>

      {paymentMethods.map((dataItem, index) => {
        return (
          <li className={styles.listItem} key={index}>
            <Link
              className={styles.linkListItem}
              href={`${PAYMENT_AMOUNT_ROUTE}`}
            >
              <p>
                <b className={styles.cash}>{dataItem}</b>
              </p>
              <div className={styles.amountAlignment}>
                <p>Amount</p>
                <p>
                  <b>0</b>
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
