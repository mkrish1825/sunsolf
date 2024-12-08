import React from "react";
import { useState } from "react";
import classes from "./checkbox.module.css";

const CheckBox = ({ name, displayName, onChange, value }) => {
  return (
    <div className={classes.radio}>
      <input
        type="checkbox"
        value={value}
        name={name}
        // onClick={() => {
        //   setPaymentType("On visit");
        //   // console.log(paymentType);
        // }}
        onChange={onChange}
      />
      {displayName}
      {/* <input type="radio" value="Online" name={name} onClick = {() => {
            setPaymentType("Online");
            //console.log(paymentType);
        }}/>
        Online */}
    </div>
  );
};

export default CheckBox;
