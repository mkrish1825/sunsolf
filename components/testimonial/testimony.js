import React from "react";
import classes from "./testimony.module.css";
import Image from "next/image";

function Testimony(props) {
  return (
    <div className={classes.testimony}>
      <Image
        width="100%"
        height="100%"
        className={classes.img}
        src={props.image}
        alt={props.name}
      />
      <h3 className={classes.name}>{props.name}</h3>
      {/* </div> */}
      <p className={classes.description}>{props.description}</p>
    </div>
  );
}

export default Testimony;
