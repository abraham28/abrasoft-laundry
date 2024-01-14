"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { LOGIN_ROUTE } from "@/app/constants";
import { redirect } from "next/navigation";

const NotFoundPage = () => {
  const session = useSession();
  useEffect(() => {
    if (session.status === "unauthenticated") redirect(LOGIN_ROUTE);
    if (session.status === "authenticated")
      signOut({ callbackUrl: LOGIN_ROUTE });
  }, [session.status]);
  if (session.status === "loading") return <div>Loading...</div>;
  return <div>Signing Out</div>;
};

export default NotFoundPage;
