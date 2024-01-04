"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.scss";
import { NavLinksContext } from ".";

interface NavLinksProps {
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const pathname = usePathname();
  const navlinks = useContext(NavLinksContext);

  return (
    <>
      {navlinks.map((link) => {
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

export default NavLinks;
