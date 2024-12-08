import React from "react";
import { useState } from "react";
import classes from "./radio.module.css";

const Radio = ({ name, displayName, onChange, value }) => {
  const [paymentType, setPaymentType] = useState("On visit");
  return (
    <div className={classes.radio}>
      <input
        type="radio"
        value={value}
        checked={true}
        name={name}
        onClick={() => {
          setPaymentType("On visit");
          // console.log(paymentType);
        }}
        onChange={(e) => {}}
      />
      On visit
      {/* <input type="radio" value="Online" name={name} onClick = {() => {
            setPaymentType("Online");
            //console.log(paymentType);
        }}/>
        Online */}
    </div>
  );
};

export default Radio;
