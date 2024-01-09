"use client";

import React from "react";
import SmallHeader from "./SmallHeader";
import LargeHeader from "./LargeHeader";
import { Container, NavbarBrand } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "public/images/company-logo.webp";
import * as constants from "@/app/constants";
import styles from "./Header.module.scss";
import { createContext } from "react";

export const NavLinksContext = createContext(constants.NAV_LINKS_ARR);

interface HeaderProps {
  navLinks?: {
    path: string;
    name: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  return (
    <nav className={styles.navBar}>
      <NavLinksContext.Provider value={navLinks || constants.NAV_LINKS_ARR}>
        <Container className={styles.innerContainer}>
          <NavbarBrand>
            <Link className={styles.brandLink} href={constants.HOME_ROUTE}>
              <Image
                src={CompanyLogo}
                alt="Company Logo"
                height={50}
                width={50}
                priority
                className="d-inline-block align-text-top"
              />
              <p>Abrasoft Laundry</p>
            </Link>
          </NavbarBrand>
          <SmallHeader />
          <LargeHeader />
        </Container>
      </NavLinksContext.Provider>
    </nav>
  );
};

export default Header;
