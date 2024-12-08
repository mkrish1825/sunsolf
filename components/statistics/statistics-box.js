import React from "react";
import classes from "./statistics-box.module.css";

function StatisticsBox(props) {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <h3 className={classes.number}>{props.num}</h3>
      <p className={classes.description}>{props.des}</p>
    </div>
  );
}

export default StatisticsBox;
