import SaveButton from "@/components/Buttons/SaveButton";
import React from "react";
import CounterButton from "@/components/Buttons/CounterButton";
import { Button } from "react-bootstrap";
import styles from "./Amount.module.scss";
import PaymentReferenceNumberForm from "@/components/Forms/PaymentReferenceNumberForm";

const amount = [
  "Exact Amount",
  "1000.00",
  "500.00",
  "200.00",
  "100.00",
  "50.00",
  "20.00",
  "5.00",
  "1.00",
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Payment Amount</h1>
        <SaveButton buttonType="submit" />
      </div>

      <CounterButton />

      <p>Presets</p>
      <div className={styles.amountList}>
        {amount.map((dataItem, index) => {
          return (
            <li className={styles.listItem} key={index}>
              <Button>
                <p className={styles.cash}>{dataItem}</p>
              </Button>
            </li>
          );
        })}
      </div>

      <PaymentReferenceNumberForm />
    </div>
  );
};

export default Page;
