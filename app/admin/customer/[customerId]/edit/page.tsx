import React from "react";
import EditProfileForm from "@/components/Forms/EditProfileForm";
import SaveButton from "@/components/Buttons/SaveButton";
import CancelButton from "@/components/Buttons/CancelButton";

const AdminEditPage = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 color="var(--primary)">Customer Profile</h1>
      <EditProfileForm id="editProfileForm" />
      <SaveButton form="editProfileForm" />
      <CancelButton />
    </div>
  );
};

export default AdminEditPage;
