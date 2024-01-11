import React from "react";
import { Button } from "react-bootstrap";

interface RegisterButtonProps {
  buttonType?: "button" | "submit" | "reset";
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ buttonType }) => {
  return (
    <Button type={buttonType} variant="primary">
      Register
    </Button>
  );
};

export default RegisterButton;
