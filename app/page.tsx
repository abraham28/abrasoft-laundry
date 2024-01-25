import React from "react";
import { CUSTOMER_DASHBOARD_ROUTE } from "@/app/constants";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const Page = async () => {
  const session = await getServerSession(authOptions);
  //TODO: check for role and redirect to correct route if admin or client
  if (session) redirect(CUSTOMER_DASHBOARD_ROUTE);

  return <div>Loading...</div>;
};

export default Page;
