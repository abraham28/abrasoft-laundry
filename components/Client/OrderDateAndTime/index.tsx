import React from "react";
import { TbCalendarFilled } from "react-icons/tb";
import { ImClock } from "react-icons/im";

const OrderDateAndTime = () => {
  return (
    <div className="d-flex justify-content-between">
      <p>
        <TbCalendarFilled /> Dec. 12, 2023
      </p>
      <p>
        <ImClock /> 11&#58;45 PM
      </p>
    </div>
  );
};

export default OrderDateAndTime;
