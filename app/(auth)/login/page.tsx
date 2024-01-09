import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginForm from "@/components/Forms/LoginForm";

const Page = () => {
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
        <Link href={"/register"}>Register</Link>
      </p>
      <p>
        Forgot your password?&nbsp;
        <Link href={"/forgot-password"}>Reset Password</Link>
      </p>
    </div>
  );
};

export default Page;
