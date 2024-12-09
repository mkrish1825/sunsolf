import Link from "next/link";
import React from "react";
import classes from "./linkBtn.module.css";

function LinkBtn({ children, link }) {
  return (
    <Link href={link}>
      <div className={classes.link}>{children}</div>
    </Link>
  );
}

export default LinkBtn;
