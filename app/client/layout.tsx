import Header from "@/components/Header";
import React from "react";
import { Container } from "react-bootstrap";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <Container
        style={{
          maxWidth: 420,
          display: "grid",
          gap: 16,
        }}
      >
        {children}
      </Container>
    </main>
  );
}
