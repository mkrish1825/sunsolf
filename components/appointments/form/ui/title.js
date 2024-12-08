import React from "react";
import classes from "./title.module.css";

function Title({ children }) {
  return <p className={classes.title}>{children}</p>;
}

export default Title;
