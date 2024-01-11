import React from "react";
import EditProfileForm from "@/components/Forms/EditProfileForm";

const AdminEditPage = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 color="var(--primary)">Customer Profile</h1>
      <EditProfileForm />
    </div>
  );
};

export default AdminEditPage;
