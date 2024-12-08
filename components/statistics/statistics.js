import React from "react";
import StatisticsBox from "./statistics-box";
import classes from "./statistics.module.css";

function Statistics() {
  return (
    <div className={classes.color}>
      <div className={classes.card}>
        <h2 className={classes.heading}>Happy Customers</h2>
        
        <div className={classes.grid}>
          <StatisticsBox num="10,000+" des="patients" />
          <StatisticsBox num="5yrs" des="expertise" />
          <StatisticsBox num="50,000+" des="happy customers" />
          
        </div>
      </div>
    </div>
  );
}

export default Statistics;
