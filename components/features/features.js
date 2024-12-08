import React, { Fragment } from "react";
import Feature from "./feature";
import { TickIcon } from "./tick-icon";
import classes from "./features.module.css";
import features from "../services/features";

function Features() {
  return (
    <div className={classes.color}>
      <div className={classes.features}>
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            img={feature.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
