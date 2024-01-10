import React from "react";
import { Button } from "react-bootstrap";

const SendToSMSButton = () => {
  return (
    <Button
      style={{
        backgroundColor: "var(--secondary)",
        color: "var(--light)",
        textDecoration: "none",
      }}
      variant="link"
    >
      Send to SMS
    </Button>
  );
};

export default SendToSMSButton;
