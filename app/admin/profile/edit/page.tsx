import React from "react";
import EditProfile from "@/components/Forms/EditProfile";

const AdminEditPage = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 color="var(--primary)">Customer Profile</h1>
      <EditProfile />
    </div>
  );
};

export default AdminEditPage;
