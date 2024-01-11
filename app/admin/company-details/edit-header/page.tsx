import { COMPANY_DETAILS_ROUTE } from "@/app/constants";
import CompanyAdminProfile from "@/components/Admin/CompanyProfile";
import SaveButton from "@/components/Buttons/SaveButton";
import Link from "next/link";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const options = [
  "Company Name",
  "123 Anywhere St.",
  "09123456789",
  "sales@company.com",
  "company.com",
  "TIN: 000-000-000-000",
  "DTI Reg.  XXXX123456789",
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <Link className="d-inline-block" href={COMPANY_DETAILS_ROUTE}>
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
        <h1 style={{ color: "var(--primary)" }}>Edit Header</h1>
      </div>

      <div className="d-flex justify-content-between">
        <p>
          <b>Company Header Preview</b>
        </p>
        <SaveButton />
      </div>

      <CompanyAdminProfile />
      <p>
        <b>Options</b>
      </p>
      {options.map((dataItem, index) => {
        return (
          <li
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <p>{dataItem}</p>
            <FaCircleCheck style={{ color: "blue" }} />
          </li>
        );
      })}
    </div>
  );
};

export default Page;
