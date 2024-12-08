import React from "react";
import classes from "./button.module.css";

function Button({ children,type,onClick, disabled}) {
  return (
    <button className={classes.btn} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;

