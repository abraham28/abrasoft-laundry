import React from "react";
import ClientProfile from "@/components/Client/ClientProfile";
import EditProfileForm from "@/components/Forms/EditProfileForm";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1>Edit Profile</h1>
      <ClientProfile />
      <EditProfileForm />
    </div>
  );
};

export default Page;
