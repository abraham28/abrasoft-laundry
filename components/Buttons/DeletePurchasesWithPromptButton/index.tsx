"use client";
import React, { useState } from "react";
import { ModalBody, ModalFooter } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeletePurchasesWithPromptButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="ms-2" variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        keyboard={false}
      >
        <ModalBody>Are you sure you want to delete this item?</ModalBody>
        <ModalFooter>
          <Button variant="danger">Delete</Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeletePurchasesWithPromptButton;
