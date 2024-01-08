import React from "react";
import Image from "react-bootstrap/Image";

const AdminProfile = () => {
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
      <h3 className="text-center">customeremail@gmail.com</h3>
    </div>
  );
};

export default AdminProfile;
