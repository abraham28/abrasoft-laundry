import SaveButton from "@/components/Buttons/SaveButton";
import EditCompanyDetailsForm from "@/components/Forms/EditCompanyDetailsForm";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }}>Company Management</h1>

      <div className="d-flex justify-content-between">
        <p>
          <b>Company Details</b>
        </p>
        <SaveButton buttonType="submit" />
      </div>

      <EditCompanyDetailsForm id="editCompanyDetailsForm" />
    </div>
  );
};

export default Page;
