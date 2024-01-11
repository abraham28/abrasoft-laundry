import React from "react";
import Image from "react-bootstrap/Image";

const CompanyAdminProfile = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        <Image
          src="https://unsplash.it/200/200"
          alt="Profile picture"
          rounded
        />
      </div>
      <p className="text-center mt-3">
        <b>Company Name</b>
      </p>
      <p className="text-center">123 Anywhere St.</p>
      <p className="text-center">sales@company.com</p>
    </div>
  );
};

export default CompanyAdminProfile;
