import ForgotPasswordForm from "@/components/Forms/ForgotPasswordForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ForgotPassword = () => {
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
        Forgot Password
      </h1>
      <ForgotPasswordForm />
      <p>
        Still remember your password? Go to <Link href={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
