import { EMPLOYEE_ROLE_EDIT_ROUTE } from "@/app/constants";
import SearchBar from "@/components/Admin/SearchBar";
import NewEmployeeButton from "@/components/Buttons/NewEmployeeButton";
import React from "react";

const employeeList = [
  { name: "Employee Name", role: "Manager" },
  { name: "Employee Name", role: "Viewer" },
  { name: "Employee Name", role: "Reporter" },
  { name: "Employee Name", role: "Manager" },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Employee Management</h1>
      </div>
      <SearchBar />
      <div className="d-flex justify-content-between align-items-center">
        <p>
          <b>Employee List</b>
        </p>
        <NewEmployeeButton routerPath={EMPLOYEE_ROLE_EDIT_ROUTE} />
      </div>

      {employeeList.map((dataItem, index) => {
        return (
          <li
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <p>
              <b>{dataItem.name}</b>
            </p>
            <p>
              <b>Role:</b> {dataItem.role}
            </p>
          </li>
        );
      })}
      <div className="d-flex justify-content-between align-items-center"></div>
    </div>
  );
};

export default Page;
