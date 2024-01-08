import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterForm from "@/components/Forms/RegisterForm";

const RegisterPage = () => {
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
        Already have an account?&nbsp;
        <Link href={"/login"}>Login</Link>
      </p>
      <p>
        Are you a company owner?&nbsp;
        <Link href={"/register-company"}>Register Company</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
