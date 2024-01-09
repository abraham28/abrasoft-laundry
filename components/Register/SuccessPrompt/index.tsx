import Link from "next/link";
import React from "react";
import { EMPLOYEE_DASHBOARD_ROUTE } from "@/app/constants";

const SuccessPrompt = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        Registration Success
      </h1>
      <p>
        Creating your account, please wait a few seconds and you will be
        redirected automatically to the dashboard...
      </p>
      <p>
        If redirection is taking a little longer&nbsp;
        <Link href={EMPLOYEE_DASHBOARD_ROUTE}>click here</Link>
      </p>
    </div>
  );
};

export default SuccessPrompt;
