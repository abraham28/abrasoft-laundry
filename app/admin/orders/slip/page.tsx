"use client";
import DetailedAdminProfile from "@/components/Admin/DetailedAdminProfile";
import OrderDeduction from "@/components/Admin/OrderDeduction";
import OrderSummary from "@/components/Admin/OrderSummary";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Slip.module.scss";
import PrintOrderSlipButton from "@/components/Buttons/PrintOrderSlipButton";
import SendToSMSButton from "@/components/Buttons/SendToSMSButton";
import SendToEmailForm from "@/components/Forms/SendToEmailForm";

const Page = () => {
  const router = useRouter();
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <Button
          variant="link"
          className="d-inline-block"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-90deg-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"
            />
          </svg>
        </Button>
        <h1 style={{ color: "var(--primary)" }}>Order Slip</h1>
      </div>

      <DetailedAdminProfile />
      <div className={styles.containerStyle}>
        <p>
          <b>
            Order Number&#58; <span>&#35;1000001</span>
          </b>
        </p>
        <p>
          <b>
            Customer name&#58; <span>The Customer</span>
          </b>
        </p>
        <p>
          <b>
            Date&#58; <span>December 25&#44; 2023</span>
          </b>
        </p>
        <p>
          <b>
            Time&#58; <span>11&#58;45 AM Philippines Standard Time</span>
          </b>
        </p>
      </div>

      <div className={styles.containerStyle}>
        <OrderSummary />
        <OrderDeduction />
      </div>

      <PrintOrderSlipButton />
      <SendToSMSButton />
      <SendToEmailForm />
    </div>
  );
};

export default Page;
