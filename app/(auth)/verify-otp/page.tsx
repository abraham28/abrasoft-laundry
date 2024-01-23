import Link from "next/link";
import React from "react";
import RegisterVerifyForm from "@/components/Forms/RegisterVerifyForm";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        Verify your Email
      </h1>
      <RegisterVerifyForm />
      <p>
        Tip&#58; Check your spam folder if you do not see OTP in your email
        inbox
      </p>
      <p>
        Did not receive your OTP?&nbsp;
        <Link href="#">Resend in 30 seconds</Link>
      </p>
    </div>
  );
};

export default Page;
