import SearchBar from "@/components/Admin/SearchBar";
import Counter from "@/components/Buttons/CounterButton";
import SaveButton from "@/components/Buttons/SaveButton";
import React from "react";
import { Image } from "react-bootstrap";

const ProductsPage = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Dashboard</h1>
        <SaveButton />
      </div>
      <SearchBar />
      <p>Products</p>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-4">
            <Image
              src="..."
              className="img-fluid rounded-start"
              alt="Full Package Image"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <p className="card-title">Full package</p>
              <p className="card-text">188.00</p>
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
