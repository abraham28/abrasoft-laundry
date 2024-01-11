"use client";
import React, { useState } from "react";
import "./CounterButton.scss";
import { Button } from "react-bootstrap";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";

const CounterButton = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className="counterContainer">
      <Button className="myButton" variant="link" onClick={handleDecrement}>
        <AiFillMinusCircle />
      </Button>
      <div className="counterValue">{count}</div>
      <Button className="myButton" variant="link" onClick={handleIncrement}>
        <BsFillPlusCircleFill />
      </Button>
    </div>
  );
};

export default CounterButton;
