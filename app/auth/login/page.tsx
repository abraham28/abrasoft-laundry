import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginForm from "@/components/Forms/LoginForm";
import {
  CUSTOMER_DASHBOARD_ROUTE,
  FORGOT_PASSWORD_ROUTE,
  REGISTER_ROUTE,
} from "@/app/constants";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
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
        Laundry Login
      </h1>
      <LoginForm />
      <p>
        Don&apos;t have an account?&nbsp;
        <Link href={REGISTER_ROUTE}>Register</Link>
      </p>
      <p>
        Forgot your password?&nbsp;
        <Link href={FORGOT_PASSWORD_ROUTE}>Reset Password</Link>
      </p>
    </div>
  );
};

export default Page;
