import React from "react";
import Icon from "../features/icon";
import classes from "./footer.module.css";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import features from "../services/features";
import Link from "next/link";

function Footer() {
  return (
    <div className={classes.color} id="footer">
      <div className={classes.footer}>
        <div className={classes.c1}>
          <p className={classes.name}>SUNSOL</p>
          <p className={classes.nameDesc}>Trusted Excellence in Radiology</p>
          <div className={classes.icons}>
            <AiFillFacebook size={30} />
            <AiOutlineInstagram size={30} />
            <AiOutlineTwitter size={30} />
          </div>
          <p></p>
        </div>
        <div className={classes.c2}>
          <h4 className={classes.heading}>About</h4>
          <div className={classes.c2Flex}>
            <p>26 Kuomboka Drive, Parklands, Kitwe ZM, 10101, Zambia</p>
            <p>
              <a href="mailto:reports@sanketsunsol.com">
                reports@sanketsunsol.com
              </a>
            </p>
            <p>
              <a href="mailto:tenders@africorp-healthcare.com">
                tenders@africorp-healthcare.com
              </a>
            </p>
          </div>
        </div>

        <div className={classes.c3}>
          <h4 className={classes.heading}>Services</h4>
          <ul className={classes.ul}>
            {features.map((item, index) => (
              <li key={index}>
                <Link href={`/services/${item.title}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
