import React from "react";
import Image from "react-bootstrap/Image";

const DetailedAdminProfile = () => {
  return (
    <div>
      <div className="d-flex justify-content-center my-3">
        <Image
          src="https://unsplash.it/200/200"
          alt="Profile picture"
          rounded
        />
      </div>
      <h2 className="text-center mt-3">Abrasoft laundry</h2>
      <p className="text-center">
        <b>
          Company Address &#44; other details etc&#46; Contact Numbers Extra
          like Registration numbers&#46;&#46;&#46;
        </b>
      </p>
    </div>
  );
};

export default DetailedAdminProfile;
