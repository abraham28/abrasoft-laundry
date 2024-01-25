import SearchBar from "@/components/Admin/SearchBar";
import CounterButton from "@/components/Buttons/CounterButton";
import SaveButton from "@/components/Buttons/SaveButton";
import React from "react";
import { Image } from "react-bootstrap";

const productInfo = [
  { name: "Full Package", alt: "Full Package Image", price: "188.00" },
  { name: "Ariel Detergent", alt: "Ariel Detergent Image", price: "17.00" },
  { name: "Downy Fabcon", alt: "Downy Fabcon Image", price: "14.00" },
  { name: "Extra Dry", alt: "Extra Dry Image", price: "7.00" },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Choose Products</h1>
        <SaveButton buttonType="submit" />
      </div>
      <SearchBar />
      <p>Products</p>

      {productInfo.map((listItem, index) => {
        return (
          <li style={{ listStyle: "none" }} key={index}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-2">
                  <Image
                    src="..."
                    className="img-fluid rounded-start"
                    alt={listItem.alt}
                  />
                </div>
                <div className="col-10">
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <p className="card-title">{listItem.name}</p>
                      <p className="card-text">
                        <b>{listItem.price}</b>
                      </p>
                    </div>
                    <CounterButton />
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default Page;
