import React from "react";
import CompanyRegisterForm from "@/components/Forms/CompanyRegisterForm";
import RegisterButton from "@/components/Buttons/RegisterButton";
import Link from "next/link";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        Company Registration
      </h1>
      <CompanyRegisterForm id="companyRegisterForm" />
      <RegisterButton form="companyRegisterForm" />
      <div>
        <p>
          Already have an account&#63; Go to
          <Link href={"/login"}> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
