import React, { useState, useEffect } from "react";
import classes from "./hero.module.css";
import Link from "next/link";
import LinkBtn from "../ui/linkBtn";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/images/radiologyPic1.jpg",
    "/images/radiologyPic2.jpg",
    "/images/radiologyPic3.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Image \${i}`}
          style={{
            display: index === i ? "block" : "none",
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      ))}
      <div className={classes.hero}>
        <div className={classes.gradient}>
          <div className={classes.description}>
            <p className={classes.heading}>Affordability without Compromise.</p>
            <p className={classes.subheading}>
              The Imaging Center at Kitwe ZM, Zambia offers a full range of
              diagnostic and screening.
            </p>
            <LinkBtn className={classes.btn} link="/appointment">
              Appointment
            </LinkBtn>
            <div className={classes.link}>
              <Link href="#cta">View Location</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
