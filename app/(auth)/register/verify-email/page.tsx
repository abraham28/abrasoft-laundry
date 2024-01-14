import React from "react";
import RegisterVerifyForm from "@/components/Forms/RegisterVerifyForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CUSTOMER_DASHBOARD_ROUTE } from "@/app/constants";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect(CUSTOMER_DASHBOARD_ROUTE);
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        Verify your Email
      </h1>
      <RegisterVerifyForm />
    </div>
  );
};

export default Page;
