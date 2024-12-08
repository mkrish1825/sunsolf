import React from "react";
import classes from "./dropdown.module.css";

function Dropdown({ content, displayName, onChange, value }) {
  return (
    <select
      className={classes.dropdown}
      value={value}
      onChange={onChange}
      displayname={displayName}
    >
      {content.map((type, index) => {
        return (
          <option value={index} key={index} className={classes.options}>
            {type}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
