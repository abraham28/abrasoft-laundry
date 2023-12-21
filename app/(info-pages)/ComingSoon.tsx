import Link from "next/link";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { HOME_ROUTE } from "@/app/constants";
import Image from "next/image";
import CompanyLogo from "@/public/images/company-logo.webp";

const ComingSoon = () => {
  return (
    <div
      style={{
        height: "100svh",
        background: "var(--light)",
        color: "var(--dark)",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          alt="Abrasoft Laundry Logo"
          src={CompanyLogo}
          width={0}
          height={0}
          style={{ width: 200, height: "auto" }}
        />
        <h1 style={{ marginBottom: "2rem" }}>{"Coming Soon"}</h1>
        <h2 style={{ marginBottom: "2rem" }}>
          {"Abrasoft Laundry Management App"}
        </h2>
        <p>Streamline you laundry business</p>
      </Container>
    </div>
  );
};

export default ComingSoon;
