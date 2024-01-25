import { ADMIN_NEW_EDIT_PRODUCT_ROUTE } from "@/app/constants";
import SearchBar from "@/components/Admin/SearchBar";
import DeleteButtonWithPrompt from "@/components/Buttons/DeleteRoleButton";
import EditRoleButton from "@/components/Buttons/EditRoleButton";
import NewProductButton from "@/components/Buttons/NewProductButton";
import React from "react";
import { Image } from "react-bootstrap";

const roleList = [
  {
    name: "Full Package",
    price: "188.00",
    image: "https://unsplash.it/50/50",
    alt: "Full package",
  },
  {
    name: "Full Package",
    price: "188.00",
    image: "https://unsplash.it/50/50",
    alt: "Full package",
  },
  {
    name: "Full Package",
    price: "188.00",
    alt: "Full package",
    image: "https://unsplash.it/50/50",
  },
  {
    name: "Full Package",
    price: "188.00",
    alt: "Full package",
    image: "https://unsplash.it/50/50",
  },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Roles Management</h1>
      </div>
      <SearchBar />
      <div className="d-flex justify-content-between">
        <p>
          <b>Roles List</b>
        </p>
        <NewProductButton routerPath={ADMIN_NEW_EDIT_PRODUCT_ROUTE} />
      </div>
      {roleList.map((dataItem, index) => {
        return (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex">
              <Image src={dataItem.image} alt={dataItem.alt} />
              <div className="ms-1">
                <p>{dataItem.name}</p>
                <p>
                  <b>{dataItem.price}</b>
                </p>
              </div>
            </div>

            <div>
              <EditRoleButton routerPath={ADMIN_NEW_EDIT_PRODUCT_ROUTE} />
              <DeleteButtonWithPrompt />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
