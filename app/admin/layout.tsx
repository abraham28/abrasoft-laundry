import Header from "@/components/Header";
import React from "react";
import { Container } from "react-bootstrap";
import { EMPLOYEE_NAV_LINKS_ARR } from "../constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header navLinks={EMPLOYEE_NAV_LINKS_ARR} />
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
  );
}
