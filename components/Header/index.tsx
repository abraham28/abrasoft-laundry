"use client";

import React from "react";
import SmallHeader from "./SmallHeader";
import LargeHeader from "./LargeHeader";
import { Container, NavbarBrand } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import CompanyLogo from "public/images/company-logo.webp";
import styles from "./Header.module.scss";
import { createContext } from "react";

const defaultNavLinks = [{ path: "/", name: "Home" }];

export const NavLinksContext = createContext(defaultNavLinks);

interface HeaderProps {
  /**
   * Link url to be navigated to when brand logo is clicked
   * @example "/home"
   */
  brandLink?: string;
  navLinks?: {
    path: string;
    name: string;
  }[];
}

const Header: React.FC<HeaderProps> = ({ navLinks, brandLink = "/" }) => {
  return (
    <nav className={styles.navBar}>
      <NavLinksContext.Provider value={navLinks || defaultNavLinks}>
        <Container className={styles.innerContainer}>
          <NavbarBrand>
            <Link className={styles.brandLink} href={brandLink}>
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
