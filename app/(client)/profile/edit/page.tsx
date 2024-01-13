import React from "react";
import ClientProfile from "@/components/Client/ClientProfile";
import EditProfileForm from "@/components/Forms/EditProfileForm";
import SaveButton from "@/components/Buttons/SaveButton";
import CancelButton from "@/components/Buttons/CancelButton";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1>Edit Profile</h1>
      <ClientProfile />
      <EditProfileForm id="editProfileForm" />
      <div style={{ display: "grid", gap: 8 }}>
        <SaveButton form="editProfileForm" />
        <CancelButton />
      </div>
    </div>
  );
};

export default Page;
