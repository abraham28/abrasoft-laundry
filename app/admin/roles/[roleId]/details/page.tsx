import SaveButton from "@/components/Buttons/SaveButton";
import EditRoleForm from "@/components/Forms/EditRoleForm";
import styles from "./details.module.scss";
import React from "react";
import { CgCheck } from "react-icons/cg";

const navLinksTitle = [
  "Employee Dashboard",
  "Company Profile",
  "Roles",
  "Employees",
  "Purchases",
  "Payments",
  "Expenses",
  "Reports",
];

const access = ["Create", "View", "Edit", "Delete"];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }}>Roles Management</h1>

      <div className="d-flex justify-content-between">
        <p>
          <b>Roles Name</b>
        </p>
        <SaveButton buttonType="submit" form="editRoleForm" />
      </div>
      <EditRoleForm id="editRoleForm" />
      <p>
        <b>Permissions</b>
      </p>
      <div>
        {navLinksTitle.map((dataItem, index) => {
          return (
            <li className={styles.listItem} key={index}>
              <b>{dataItem}</b>
              <div className={styles.accessListContainer}>
                {access.map((accessItem, index) => {
                  return (
                    <div className={styles.accessListItem} key={index}>
                      <p className="me-2">
                        <b>{accessItem}</b>
                      </p>
                      <div className="center">
                        <label className={styles.label}>
                          <input
                            className={styles.labelCheckbox}
                            type="checkbox"
                          />
                          <span className={styles.labelText}>
                            <span className={styles.labelCheck}>
                              <i className={styles.myIcon}>
                                <CgCheck />
                              </i>
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
