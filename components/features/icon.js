import React from "react";
import Facebook from "../footer/Facebook";
import Instagram from "../footer/Instagram";
import Twitter from "../footer/Twitter";
import { BedIcon, PlusIcon, ResultIcon, TickIcon } from "./tick-icon";

function Icon(props) {
  const { icon } = props;
  if (icon == "Bed") {
    return <BedIcon />;
  } else if (icon == "Tick") {
    return <TickIcon />;
  } else if (icon == "Result") {
    return <ResultIcon />;
  } else if (icon == "Plus") {
    return <PlusIcon />;
  } else if (icon === "facebook") {
    return <Facebook className={props.className} />;
  } else if (icon === "instagram") {
    return <Instagram />;
  } else if (icon === "twitter") {
    return <Twitter />;
  }
}

export default Icon;
