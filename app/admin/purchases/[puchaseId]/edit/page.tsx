import SearchBar from "@/components/Admin/SearchBar";
import React from "react";
import SaveButton from "@/components/Buttons/SaveButton";
import CounterButton from "@/components/Buttons/CounterButton";
import { Image } from "react-bootstrap";
import styles from "./Edit.module.scss";
import CashAmountForm from "@/components/Forms/CashAmoutForm";
import GCashAmountForm from "@/components/Forms/GCashAmoutForm";

const productList = [
  {
    name: "Ariel Detergent",
    cost: "17.00",
    image: "https://unsplash.it/50/50",
    alt: "Detergent Image",
  },
  {
    name: "Downy Fabcon",
    cost: "15.00",
    image: "https://unsplash.it/50/50",
    alt: "Detergent Image",
  },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Purchases</h1>
      </div>
      <div className="d-flex justify-content-between">
        <p>
          <b>Purchase Details</b>
        </p>
        <SaveButton buttonType="submit" form="purchaseForm" />
      </div>
      <p>
        <b>Vendor Name</b>
      </p>
      <SearchBar placeholder="XYZ Grocery store" />
      <p>
        <b>Products</b>
      </p>
      {productList.map((dataItem, index) => {
        return (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <div className="d-flex">
              <div>
                <Image src={dataItem.image} alt={dataItem.alt} />
              </div>
              <div className="ms-1">
                <p>{dataItem.name}</p>
                <p>
                  <b>
                    Cost:{" "}
                    <span className={styles.costContainer}>
                      {dataItem.cost}
                    </span>
                  </b>
                </p>
              </div>
            </div>
            <CounterButton />
          </div>
        );
      })}
      <SearchBar placeholder="Add Products" />

      <p>
        <b>Payments Made</b>
      </p>
      <CashAmountForm id="purchaseForm" />
      <GCashAmountForm id="purchaseForm" />
      <SearchBar placeholder="Add payment methods" />
    </div>
  );
};

export default Page;
