import React from "react";
import { Button } from "react-bootstrap";

interface SaveButtonProps {
  buttonType?: "button" | "submit" | "reset";
}

const SaveButton: React.FC<SaveButtonProps> = ({ buttonType }) => {
  return (
    <Button type={buttonType} variant="primary">
      Save
    </Button>
  );
};

export default SaveButton;
