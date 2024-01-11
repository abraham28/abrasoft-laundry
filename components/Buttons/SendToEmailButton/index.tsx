import React from "react";
import { Button } from "react-bootstrap";

interface SaveButtonProps {
  buttonType?: "button" | "submit" | "reset";
}

const SendToEmailButton: React.FC<SaveButtonProps> = ({ buttonType }) => {
  return (
    <Button type={buttonType} className="w-100" variant="success">
      Send To Email
    </Button>
  );
};

export default SendToEmailButton;
