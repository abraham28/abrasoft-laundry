import React from "react";
import { Container } from "react-bootstrap";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Container
        style={{
          maxWidth: 420,
          minHeight: "100svh",
          display: "grid",
          alignItems: "center",
        }}
      >
        {children}
      </Container>
    </main>
  );
}
