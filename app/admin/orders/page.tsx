import { EMPLOYEE_ROLE_EDIT_ROUTE } from "@/app/constants";
import SearchBar from "@/components/Admin/SearchBar";
import NewCustomerButton from "@/components/Buttons/NewCustomerButton";
import React from "react";

const employeeList = [
  { name: "Customer Name", payment: "No balance due", totalSpent: "1,00.00" },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Employee Management</h1>
      </div>
      <SearchBar placeholder="Search anything" />
      <div className="d-flex justify-content-between align-items-center">
        <p>
          <b>Employee List</b>
        </p>
        <NewCustomerButton routerPath={EMPLOYEE_ROLE_EDIT_ROUTE} />
      </div>

      {employeeList.map((dataItem, index) => {
        return (
          <div
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={index}
          >
            <p>
              <b>{dataItem.name}</b>
            </p>
            <div>
              <p style={{ textAlign: "end" }}>
                <b>Payment&#58;</b> {dataItem.payment}
              </p>
              <p style={{ textAlign: "end" }}>
                <b>Total Spent&#58;</b>
                {dataItem.totalSpent}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
