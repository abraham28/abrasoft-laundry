import React from "react";
import styles from "./ClientProfileDetails.module.scss";

const ClientProfileDetails = () => {
  return (
    <div className={styles.profileDetailsAlignment}>
      <div>
        <p>
          <b>First Name</b>
        </p>
        <p>Customer</p>
      </div>
      <div>
        <p>
          <b>Last Name</b>
        </p>
        <p>Customer</p>
      </div>
      <div>
        <p>
          <b>Email</b>
        </p>
        <p>customeremail@gmail.com</p>
      </div>
      <div>
        <p>
          <b>Birthday</b>
        </p>
        <p>Dececmber 25, 2023</p>
      </div>
      <div>
        <p>
          <b>Contact Number</b>
        </p>
        <p>No contact number3</p>
      </div>
      <div>
        <p>
          <b>Address</b>
        </p>
        <p>123 Anywhere st.</p>
      </div>
    </div>
  );
};

export default ClientProfileDetails;
