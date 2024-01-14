"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { LOGIN_ROUTE } from "@/app/constants";

const NotFoundPage = () => {
  useEffect(() => {
    signOut({ callbackUrl: LOGIN_ROUTE });
  }, []);
  return <div>Signing Out</div>;
};

export default NotFoundPage;
