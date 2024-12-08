import React from "react";
import Testimony from "./testimony";
import classes from "./testimonies.module.css";

const testimonies = [
  {
    name: "Doctor 1",
    description:
      "Cardiologists. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: "/images/Stevie.png",
  },
  {
    name: "Doctor 2",
    description:
      "Radiologists. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: "/images/Stevie.png",
  },
  {
    name: "Doctor 3",
    description:
      "Pulmonologist. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    image: "/images/Stevie.png",
  },
];
function Testimonies() {
  return (
    <div className={classes.color}>
      <div className={classes.mainHeading}>
        <h2 className={classes.heading}>Don't just take our word for it</h2>
        <p className={classes.description}>
          See what some of our 10,000+ users across the globe have to say
        </p>
      </div>
      <div className={classes.testimonies}>
        {testimonies.map((testimony, index) => (
          <Testimony
            key={index}
            name={testimony.name}
            description={testimony.description}
            image={testimony.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonies;
