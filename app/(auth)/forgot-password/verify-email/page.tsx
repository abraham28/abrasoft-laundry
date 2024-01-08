import ForgotPasswordVerifyForm from "@/components/Forms/ForgotPasswordVerifyForm";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }} className="text-center">
        Verify your Email
      </h1>
      <ForgotPasswordVerifyForm />
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
