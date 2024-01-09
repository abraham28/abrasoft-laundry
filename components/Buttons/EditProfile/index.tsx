"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

const EditProfileButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("profile/edit")} variant="primary">
      Edit Profile
    </Button>
  );
};

export default EditProfileButton;
