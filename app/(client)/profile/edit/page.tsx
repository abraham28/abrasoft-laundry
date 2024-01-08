import React from "react";
import ClientProfile from "@/components/Client/ClientProfile";
import EditClientProfile from "@/components/Forms/EditClientProfile";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1>Edit Profile</h1>
      <ClientProfile />
      <EditClientProfile />
    </div>
  );
};

export default Page;
