import {
  EMPLOYEE_DASHBOARD_ROUTE,
  EMPLOYEE_PRODUCTS_ROUTE,
  ORDER_SLIP_ROUTE,
  PAYMENTS_ROUTE,
} from "@/app/constants";
import OrderDateAndTime from "@/components/Admin/OrderDateAndTime";
import OrderDeduction from "@/components/Admin/OrderDeduction";
import OrderSummary from "@/components/Admin/OrderSummary";
import AddPaymentButton from "@/components/Buttons/AddPaymentButton";
import AddProductsButton from "@/components/Buttons/AddProductsButton";
import OrderSlipButton from "@/components/Buttons/OrderSlipButton";
import SaveButton from "@/components/Buttons/SaveButton";
import VoidOrder from "@/components/Buttons/VoidOrderButton";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <Link className="d-inline-block" href={EMPLOYEE_DASHBOARD_ROUTE}>
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
        </Link>
        <h1 style={{ color: "var(--primary)" }}>Customer Order</h1>
      </div>
      <div>
        <p>
          <b>Order Details</b>
        </p>
        <p>
          <b>#01001</b>
        </p>
      </div>

      <OrderDateAndTime />
      <OrderSummary />
      <AddProductsButton routerPath={EMPLOYEE_PRODUCTS_ROUTE} />
      <OrderDeduction />
      <AddPaymentButton routerPath={PAYMENTS_ROUTE} />
      <OrderSlipButton routerPath={ORDER_SLIP_ROUTE} />
      <SaveButton />
      <VoidOrder routerPath={PAYMENTS_ROUTE} />
    </div>
  );
};

export default Page;
