import React from "react";
import { TbCalendarFilled } from "react-icons/tb";
import { ImClock } from "react-icons/im";

const OrderDateAndTime = () => {
  return (
    <div className="d-flex justify-content-between">
      <p>
        <TbCalendarFilled /> <b>Dec. 12, 2023</b>
      </p>
      <p>
        <ImClock /> <b>11&#58;45 PM</b>
      </p>
    </div>
  );
};

export default OrderDateAndTime;
