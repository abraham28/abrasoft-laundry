import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterForm from "@/components/Forms/RegisterForm";
import {
  COMPANY_REGISTER_ROUTE,
  CUSTOMER_DASHBOARD_ROUTE,
  LOGIN_ROUTE,
} from "@/app/constants";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect(CUSTOMER_DASHBOARD_ROUTE);

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <Image
        height={100}
        width={100}
        alt="company-logo"
        src={"/images/company-logo.webp"}
        style={{ margin: "0 auto" }}
      />
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        Laundry Register
      </h1>
      <RegisterForm />
      <p>
        Already have an account?&nbsp; Go to{" "}
        <Link href={LOGIN_ROUTE}>Login</Link>
      </p>
      <p>
        Are you a company owner?&nbsp; Go to{" "}
        <Link href={COMPANY_REGISTER_ROUTE}>Company Registration</Link>
      </p>
    </div>
  );
};

export default Page;
