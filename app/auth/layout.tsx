"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { Container } from "react-bootstrap";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
}
