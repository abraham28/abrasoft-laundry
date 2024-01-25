import SearchBar from "@/components/Admin/SearchBar";
import SaveButton from "@/components/Buttons/SaveButton";
import EditVendorForm from "@/components/Forms/EditVendorForm";
import GCashAmountForm from "@/components/Forms/GCashAmoutForm";
import UtilitiesAmountForm from "@/components/Forms/UtiliesAmoutForm";
import React from "react";

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <h1 style={{ color: "var(--primary)" }}>Expenses</h1>

      <div className="d-flex justify-content-between">
        <p>
          <b>Expenses Details</b>
        </p>
        <SaveButton buttonType="submit" form={"submitForm"} />
      </div>
      <EditVendorForm id="submitForm" />
      <UtilitiesAmountForm id="submitForm" />
      <SearchBar placeholder="Add category" />
      <p>
        <b>Payments</b>
      </p>
      <GCashAmountForm id="submitForm" />
      <SearchBar placeholder="Add payment methods" />
    </div>
  );
};

export default Page;
