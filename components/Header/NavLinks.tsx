"use client";
import React from "react";
import * as constants from "@/app/constants";
import CustomerNavLinks from "./CustomerNavLinks";
import EmployeeNavLinks from "./EmployeeNavLinks";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === constants.EMPLOYEE_ROUTE ? (
        <EmployeeNavLinks onClick={onClick} />
      ) : (
        <CustomerNavLinks onClick={onClick} />
      )}
    </>
  );
};

export default NavLinks;
