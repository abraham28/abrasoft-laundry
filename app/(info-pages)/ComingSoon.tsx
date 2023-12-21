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
          display: "grid",
          placeContent: "center",
          textAlign: "center",
          gap: "2rem",
          height: "100%",
        }}
      >
        <h1>
          <Image
            alt="Abrasoft Laundry Image"
            src={CompanyLogo}
            width={0}
            height={0}
            style={{
              width: "100%",
              maxWidth: 200,
              height: "auto",
              margin: "0 auto",
            }}
          />
        </h1>
        <h3>{"Coming Soon"}</h3>
        <h2>{"Abrasoft Laundry Management App"}</h2>
        <p>Streamline you laundry business</p>
      </Container>
    </div>
  );
};

export default ComingSoon;
