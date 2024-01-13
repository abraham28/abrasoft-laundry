import React from "react";
import { Button } from "react-bootstrap";

interface SaveButtonProps {
  form?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ form: id }) => {
  return (
    <Button form={id} type="submit" variant="primary">
      Save
    </Button>
  );
};

export default SaveButton;
