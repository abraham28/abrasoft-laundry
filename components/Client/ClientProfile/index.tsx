import React from "react";
import Image from "react-bootstrap/Image";

const ClientProfile = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        <Image
          src="https://unsplash.it/200/200"
          alt="Profile picture"
          roundedCircle
        />
      </div>
      <h2 className="text-center mt-3">Customer Name</h2>
      <h5 className="text-center text-muted">customeremail@gmail.com</h5>
    </div>
  );
};

export default ClientProfile;
