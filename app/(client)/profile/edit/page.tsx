import React from "react";
import ClientProfile from "@/components/Client/ClientProfile";
import EditProfile from "@/components/Forms/EditProfile";

const ClientEditPage = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1>Edit Profile</h1>
      <ClientProfile />
      <EditProfile />
    </div>
  );
};

export default ClientEditPage;
