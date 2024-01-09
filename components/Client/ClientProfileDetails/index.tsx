import React from "react";
import styles from "./ClientProfileDetails.module.scss";

const ClientProfileDetails = () => {
  return (
    <div className={styles.profileDetailsAlignment}>
      <div>
        <p>First Name</p>
        <p>Customer</p>
      </div>
      <div>
        <p>Last Name</p>
        <p>Customer</p>
      </div>
      <div>
        <p>Email</p>
        <p>customeremail@gmail.com</p>
      </div>
      <div>
        <p>Birthday</p>
        <p>Dececmber 25, 2023</p>
      </div>
      <div>
        <p>Contact Number</p>
        <p>No contact number3</p>
      </div>
      <div>
        <p>Address</p>
        <p>123 Anywhere st.</p>
      </div>
    </div>
  );
};

export default ClientProfileDetails;
