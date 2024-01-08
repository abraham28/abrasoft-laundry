import React from "react";
import EditProfileButton from "@/components/Buttons/EditProfileButton";
import ClientProfile from "@/components/Client/ClientProfile";
import ClientProfileDetails from "@/components/Client/ClientProfileDetails";
import { CLIENT_EDIT_PROFILE_ROUTE } from "@/app/constants";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1>Profile</h1>
        <EditProfileButton routerPath={CLIENT_EDIT_PROFILE_ROUTE} />
      </div>
      <ClientProfile />
      <ClientProfileDetails />
    </div>
  );
};

export default Page;
