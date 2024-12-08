import React from "react";
import classes from "./wrapper.module.css";

function Wrapper({ children }) {
  return (
    <>
      {/* <div className={classes.circle1} />
      <div className={classes.circle2} /> */}
      <div className={classes.wrapper}>
        <div className={classes.blurBg}></div>
        <form className={classes.form} action="/appointment" method="POST">
          {children}
        </form>
      </div>
    </>
  );
}

export default Wrapper;
