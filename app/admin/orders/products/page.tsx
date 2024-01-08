import SearchBar from "@/components/Admin/SearchBar";
import CounterButton from "@/components/Buttons/CounterButton";
import SaveButton from "@/components/Buttons/SaveButton";
import React from "react";
import { Image } from "react-bootstrap";

const Page = () => {
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
          <div className="col-2">
            <Image
              src="..."
              className="img-fluid rounded-start"
              alt="Full Package Image"
            />
          </div>
          <div className="col-10">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="card-title">Full package</p>
                <p className="card-text">
                  <b>188.00</b>
                </p>
              </div>
              <CounterButton />
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-2">
            <Image
              src="..."
              className="img-fluid rounded-start"
              alt="Ariel Detergent Image"
            />
          </div>
          <div className="col-10">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="card-title">Ariel Detergent</p>
                <p className="card-text">
                  <b>17.00</b>
                </p>
              </div>
              <CounterButton />
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-2">
            <Image
              src="..."
              className="img-fluid rounded-start"
              alt="Downy Fabcon Image"
            />
          </div>
          <div className="col-10">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="card-title">Downy Fabcon</p>
                <p className="card-text">
                  <b>14.00</b>
                </p>
              </div>
              <CounterButton />
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-2">
            <Image
              src="..."
              className="img-fluid rounded-start"
              alt="Extra Dry Image"
            />
          </div>
          <div className="col-10">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="card-title">Extra Dry</p>
                <p className="card-text">
                  <b>7.00</b>
                </p>
              </div>
              <CounterButton />
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-2">
            <Image
              src="..."
              className="img-fluid rounded-start"
              alt="Self Service Image"
            />
          </div>
          <div className="col-10">
            <div className="card-body d-flex justify-content-between">
              <div>
                <p className="card-title">Self Service</p>
                <p className="card-text">
                  <b>128.00</b>
                </p>
              </div>
              <CounterButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
