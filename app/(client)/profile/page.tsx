import React from "react";
import EditProfileButton from "@/components/Buttons/EditProfile";
import ClientProfile from "@/components/Client/ClientProfile";
import ClientProfileDetails from "@/components/Client/ClientProfileDetails";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1>Profile</h1>
        <EditProfileButton />
      </div>
      <ClientProfile />
      <ClientProfileDetails />
    </div>
  );
};

export default Page;
