import React from "react";
import * as constants from "@/app/constants";
import Link from "next/link";
import styles from "./CustomerNavlinks.module.scss";
import { usePathname } from "next/navigation";

interface CustomerNavLinksProps {
  onClick?: () => void;
}

const CustomerNavLinks: React.FC<CustomerNavLinksProps> = ({ onClick }) => {
  const pathname = usePathname();

  return (
    <>
      {constants.CUSTOMER_NAV_LINKS_ARR.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.path}
            className={`${styles.link}${
              pathname === link.path ? ` ${styles.activeLink}` : ""
            }`}
            onClick={onClick}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default CustomerNavLinks;
