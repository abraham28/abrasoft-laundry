"use client";

import Header from "@/components/Header";
import React from "react";
import { Container } from "react-bootstrap";
import { CUSTOMER_NAV_LINKS_ARR } from "../constants";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <main>
        <Header navLinks={CUSTOMER_NAV_LINKS_ARR} />
        <Container
          style={{
            maxWidth: 420,
            display: "grid",
            gap: 16,
            marginTop: 70,
          }}
        >
          {children}
        </Container>
      </main>
    </SessionProvider>
  );
}
