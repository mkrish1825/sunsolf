import React, { useState } from "react";
import classes from "./date.module.css";

function DateInput() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  return (
    <div className={classes.date}>
      {/* <input
        type="date"
        value={date}
        onChange={handleDateChange}
        min={new Date().toISOString().slice(0, 10)}
      />
      <input type="time" value={time} onChange={handleTimeChange} /> */}
    </div>
  );
}

export default DateInput;
