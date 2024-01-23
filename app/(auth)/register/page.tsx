import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterForm from "@/components/Forms/RegisterForm";

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
