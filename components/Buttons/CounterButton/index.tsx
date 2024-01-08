"use client";
import React, { useState } from "react";
import styles from "./CounterButton.module.scss";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div className={styles.counterContainer}>
      <Button className="myButton" onClick={handleDecrement}>
        -
      </Button>
      <div className="counter-value">{count}</div>
      <Button className="myButton" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default Counter;
