import React, { useState, useEffect } from "react";
import classes from "./services.module.css";
import markdownIt from "markdown-it";
import Loading from "../ui/loading";
import Features from "./features";
import Image from "next/image";
import Footer from "../footer/footer";

function Services({ service }) {
  const feature = Features.find((obj) => {
    return obj.title === service;
  });

  if (feature === undefined) {
    return <Loading />;
  }
  const text = feature.detailedDescription;
  const md = new markdownIt();
  const featureDescription = md
    .render(text)
    .replace("<pre><code>", "<p>")
    .replace(`</code></pre>`, "</p>");
  // console.log(featureDescription);
  // console.log(feature.img);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.serviceBox}>
          <div className={classes.serviceTitle}>{feature.heading}</div>
          <div className={classes.image}>
            <Image width="500%" height="350%" src={feature.img}></Image>
          </div>
          <div className={classes.serviceContent}>
            <div
              className={classes.servicesDesc}
              dangerouslySetInnerHTML={{ __html: featureDescription }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Services;
