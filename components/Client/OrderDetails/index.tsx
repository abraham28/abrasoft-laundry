import React from "react";
import { Accordion, AccordionHeader, AccordionItem } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import OrderDateAndTime from "../OrderDateAndTime";

const OrderDetails = () => {
  return (
    <Accordion defaultActiveKey="0" flush>
      <AccordionItem eventKey="0">
        <AccordionHeader>
          <div className="accordion-button">
            <p>#OR0152</p>
          </div>
          <p style={{ color: "var(--primary)" }}>Status&#58; Completed</p>
        </AccordionHeader>
        <AccordionBody>
          <OrderDateAndTime />
          <p>Summary</p>
          <div className="d-flex justify-content-between">
            <p>Full Package</p>
            <p>180.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Detergent used</p>
            <p>16.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Fabcon used</p>
            <p>14.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Extra dry</p>
            <p>7.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Order total&#58;</p>
            <p>14.00</p>
          </div>

          <p>Less</p>

          <div className="d-flex justify-content-between">
            <p>Cash payment</p>
            <p>-100.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Cash payment</p>
            <p>-20.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Points redeemed</p>
            <p>-5.00</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Amount Due</p>
            <p>97.00</p>
          </div>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

export default OrderDetails;
