import React, { useState } from "react";
import classes from "./input.module.css";

function Input({ title, type, name, onChange, displayName, placeholder }) {
  return (
    <div className={classes.form}>
      <input
        type={type}
        name={title}
        required
        onChange={onChange}
        displayname={displayName}
        placeholder={placeholder||""}
      />
      <label htmlFor={title} className={classes.labelName}>
        <span className={classes.contentName}>{name}</span>
      </label>
    </div>
  );
}

export default Input;
