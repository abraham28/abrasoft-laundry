import { CREATE_PURCHASES_ROUTE } from "@/app/constants";
import SearchBar from "@/components/Admin/SearchBar";
import EditRoleButton from "@/components/Buttons/EditRoleButton";
import CreatePurchasesButton from "@/components/Buttons/CreatePurchasesButton";
import React from "react";
import DeletePurchasesWithPromptButton from "@/components/Buttons/DeletePurchasesWithPromptButton";

const roleList = [
  {
    name: "San Roque Supermarket",
    date: "Jan. 5, 2004",
  },
  {
    name: "San Roque Supermarket",
    date: "Jan. 5, 2004",
  },
  {
    name: "San Roque Supermarket",
    date: "Jan. 5, 2004",
  },
  {
    name: "San Roque Supermarket",
    date: "Jan. 5, 2004",
  },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Purchases</h1>
      </div>
      <SearchBar />
      <div className="d-flex justify-content-between">
        <p>
          <b>Employee List</b>
        </p>
        <CreatePurchasesButton routerPath={CREATE_PURCHASES_ROUTE} />
      </div>
      {roleList.map((dataItem, index) => {
        return (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <p>
                <b>{dataItem.name}</b>
              </p>
              <p>
                <b>{dataItem.date}</b>
              </p>
            </div>

            <div>
              <EditRoleButton routerPath={CREATE_PURCHASES_ROUTE} />
              <DeletePurchasesWithPromptButton />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
