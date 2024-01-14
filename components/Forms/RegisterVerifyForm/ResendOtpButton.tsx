import React from "react";
import { Button } from "react-bootstrap";

interface ResendButtonProps {
  onClick: () => void;
  disabled: boolean;
  countdown: number;
}

const ResendButton: React.FC<ResendButtonProps> = ({
  onClick,
  disabled,
  countdown,
}) => {
  return (
    <Button type="button" variant="link" disabled={disabled} onClick={onClick}>
      {countdown > 0 ? `Resend in ${countdown} seconds` : "Resend OTP"}
    </Button>
  );
};

export default ResendButton;
