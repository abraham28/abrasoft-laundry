import React from "react";
import { Button } from "react-bootstrap";

interface SaveButtonProps {
  buttonType: "button" | "submit" | "reset";
  form?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ buttonType, form }) => {
  return (
    <Button type={buttonType} form={form} variant="primary">
      Save
    </Button>
  );
};

export default SaveButton;
