import SearchBar from "@/components/Admin/SearchBar";
import React from "react";

const paymentList = [
  {
    transactionType: "GCash",
    date: "January 5, 2023",
    paymentType: "Expense Payment",
    amount: "100.Php",
  },
  {
    transactionType: "Bank",
    date: "January 5, 2023",
    paymentType: "Order Payment",
    amount: "100.Php",
  },
  {
    transactionType: "Cash",
    date: "January 5, 2023",
    paymentType: "Purchase Payment",
    amount: "100.Php",
  },
];

const Page = () => {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div className="d-flex justify-content-between">
        <h1 style={{ color: "var(--primary)" }}>Payment Made</h1>
      </div>
      <SearchBar />
      <p>
        <b>Payment List</b>
      </p>

      {paymentList.map((dataItem, index) => {
        return (
          <li
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <b>
              <p>{dataItem.transactionType}</p>
              <p>{dataItem.paymentType}</p>
            </b>
            <b style={{ textAlign: "end" }}>
              <p>{dataItem.date}</p>
              <p>{dataItem.amount}</p>
            </b>
          </li>
        );
      })}
      <div className="d-flex justify-content-between align-items-center"></div>
    </div>
  );
};

export default Page;
