import React from "react";
import styles from "./ClientProfileDetails.module.scss";

const ClientProfileDetails = () => {
  return (
    <div className={styles.profileDetailsAlignment}>
      <div>
        <h4>First Name</h4>
        <h4>Customer</h4>
      </div>
      <div>
        <h4>Last Name</h4>
        <h4>Customer</h4>
      </div>
      <div>
        <h4>Email</h4>
        <h4>customeremail@gmail.com</h4>
      </div>
      <div>
        <h4>Birthday</h4>
        <h4>Dececmber 25, 2023</h4>
      </div>
      <div>
        <h4>Contact Number</h4>
        <h4>No contact number3</h4>
      </div>
      <div>
        <h4>Address</h4>
        <h4>123 Anywhere st.</h4>
      </div>
    </div>
  );
};

export default ClientProfileDetails;
