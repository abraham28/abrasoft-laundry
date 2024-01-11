import {
  COMPANY_EDIT_DETAILS_ROUTE,
  COMPANY_EDIT_HEADER_ROUTE,
} from "@/app/constants";
import CompanyAdminProfile from "@/components/Admin/CompanyProfile";
import EditDetailsButton from "@/components/Buttons/EditDetailsButton";
import EditHeaderButton from "@/components/Buttons/EditHeaderButton";
import React from "react";

const companyDetails = [
  { title: "Company Name", name: "My Company" },
  { title: "Company Address", name: "123 Anywhere St." },
  { title: "Contact Number", name: "09123456789" },
  { title: "Company Email", name: "sales.company.com" },
  { title: "Company Website", name: "company.com" },
  { title: "Company TIN", name: "000-000-000-000" },
  { title: "DTI Reg.", name: "XXXX123456789" },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }}>Company Management</h1>
      <div className="d-flex justify-content-between">
        <p>
          <b>Company Header Preview</b>
        </p>
        <EditHeaderButton routerPath={COMPANY_EDIT_HEADER_ROUTE} />
      </div>
      <CompanyAdminProfile />

      <div className="d-flex justify-content-between">
        <p>
          <b>Company Details</b>
        </p>
        <EditDetailsButton routerPath={COMPANY_EDIT_DETAILS_ROUTE} />
      </div>

      {companyDetails.map((dataItem, index) => {
        return (
          <li style={{ listStyle: "none" }} key={index}>
            <p>
              <b>{dataItem.title}&#58;</b> <span>{dataItem.name}</span>
            </p>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
