import React from "react";
import { Button } from "react-bootstrap";

interface RegisterButtonProps {
  form: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ form: form }) => {
  return (
    <Button form={form} type="submit" variant="primary">
      Register
    </Button>
  );
};

export default RegisterButton;
