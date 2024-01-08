"use client";

import {
  EMPLOYEE_DASHBOARD_ROUTE,
  EMPLOYEE_ORDERS_ROUTE,
} from "@/app/constants";
import AdminProfile from "@/components/Admin/AdminProfile";
import OrderHistory from "@/components/Admin/OderHistory";
import EditProfileButton from "@/components/Buttons/EditProfileButton";
import NewOrderButton from "@/components/Buttons/NewOrderButton";
import Link from "next/link";
import React from "react";

const AdminProfilePage = () => {
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
        <h1 style={{ color: "var(--primary)" }}>Customer Profile</h1>
      </div>
      <AdminProfile />
      <div className="d-flex justify-content-between">
        <EditProfileButton routerPath="./profile/edit" />
        <NewOrderButton routerPath={EMPLOYEE_ORDERS_ROUTE} />
      </div>
      <p style={{ fontWeight: "var(--text-bold)" }}>Order History</p>
      <OrderHistory />
    </div>
  );
};

export default AdminProfilePage;
