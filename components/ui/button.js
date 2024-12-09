import React from "react";
import classes from "./button.module.css";

function Button(props) {
  return (
    <div className={`${classes.btn} ${props.className}`}>{props.children}</div>
  );
}

export default Button;
