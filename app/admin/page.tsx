import EmployeeDashboardListItem from "@/components/Admin/EmployeeDashboardListItem";
import SearchBar from "@/components/Admin/SearchBar";
import NewCustomerButton from "@/components/Buttons/NewCustomerButton";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Dashboard</h1>
        <NewCustomerButton />
      </div>
      <SearchBar />
      <EmployeeDashboardListItem />
    </div>
  );
};

export default Page;
