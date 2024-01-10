import React from "react";
import { Button } from "react-bootstrap";

<<<<<<< HEAD
const SaveButton = () => {
  return (
    <Button type="submit" variant="primary">
=======
interface SaveButtonProps {
  buttonType?: "button" | "submit" | "reset";
}

const SaveButton: React.FC<SaveButtonProps> = ({ buttonType }) => {
  return (
    <Button type={buttonType} variant="primary">
>>>>>>> 68d629d ((admin) Employee UI, added styles, uses map function for efficient code)
      Save
    </Button>
  );
};

export default SaveButton;
