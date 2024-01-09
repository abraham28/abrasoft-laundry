import Link from "next/link";
import React from "react";
import { EMPLOYEE_DASHBOARD_ROUTE } from "@/app/constants";

const NewPasswordCreated = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        New Password is Set
      </h1>
      <p>
        Your new password has been set, this will be the default password that
        you need to use when logging in. Please wait we will automatically
        redirect you to the dashboard
      </p>
      <p>
        If redirection is taking a little longer&nbsp;
        <Link href={EMPLOYEE_DASHBOARD_ROUTE}>click here</Link>
      </p>
    </div>
  );
};

export default NewPasswordCreated;
