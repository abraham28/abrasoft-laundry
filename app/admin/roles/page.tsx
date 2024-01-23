import { ROLES_MANAGEMENT_EDIT_ROUTE } from "@/app/constants";
import SearchBar from "@/components/Admin/SearchBar";
import DeleteRoleButtonWithPrompt from "@/components/Buttons/DeleteRoleButton";
import EditRoleButton from "@/components/Buttons/EditRoleButton";
import NewRoleButton from "@/components/Buttons/NewRoleButton";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Employee Management</h1>
      </div>
      <SearchBar />
      <div className="d-flex justify-content-between">
        <p>
          <b>Employee List</b>
        </p>
        <NewRoleButton routerPath={ROLES_MANAGEMENT_EDIT_ROUTE} />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <p>
          <b>Admin</b>
        </p>
        <div>
          <EditRoleButton routerPath={ROLES_MANAGEMENT_EDIT_ROUTE} />
          <DeleteRoleButtonWithPrompt />
        </div>
      </div>
    </div>
  );
};

export default Page;
