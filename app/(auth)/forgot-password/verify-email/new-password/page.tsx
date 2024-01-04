import React from "react";
import NewPasswordForm from "@/components/Forms/NewPasswordForm";

const NewPasswordPage = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        Create New Password
      </h1>
      <NewPasswordForm />
    </div>
  );
};

export default NewPasswordPage;
