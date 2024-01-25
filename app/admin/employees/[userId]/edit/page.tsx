import SaveButton from "@/components/Buttons/SaveButton";
import EditEmployeeForm from "@/components/Forms/EditEmployeeForm";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }}>Roles Management</h1>

      <div className="d-flex justify-content-between">
        <p>
          <b>Roles Details</b>
        </p>
        <SaveButton buttonType="submit" form="editEmployeeForm" />
      </div>
      <EditEmployeeForm id="editEmployeeForm" />
    </div>
  );
};

export default Page;
