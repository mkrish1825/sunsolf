import React, { useEffect, useState } from "react";
import classes from "./cta.module.css";
import axios from "axios";

function Cta() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact:"",
    subject: "",
    feedback: "",
  });
  const [activeLocation, setActiveLocation] = useState('Location 1');

  const handleLocationToggle = (location) => {
    setActiveLocation(location);
  };

  const handleChange = (event, type) => {
    setFormData({ ...formData, [type]: event.target.value });
  };

  const handleSubmit = (e) => {
    // alert("Thank you for your feedback!");
    e.preventDefault();
    console.log("Button Clicked");
    axios
      .post("/api/mail", formData)
      .then((res) => {
        // const response = res.json();
        if (res.status) alert("Thank you for your feedback!");
        else alter("Something went wrong, please try later.");
      })
      .catch((err) => {
        alert("Something went wrong! Please try again later.");
      });
  };

  return (
    <div className={classes.bgImg} id="cta">
      <div className={classes.flexBox}>
        <div className={classes.formContainer}>
          <h3 className={classes.heading}>We would like to hear from you!</h3>
          <div className={classes.inputTag}>
            <input
              type="text"
              placeholder="Name *"
              required
              onChange={(e) => handleChange(e, "name")}
            />
            <input
              type="tel"
              placeholder="Contact *"
              required
              onChange={(e) => handleChange(e, "contact")}
            />
            <input
              type="email"
              placeholder="Email *"
              required
              onChange={(e) => handleChange(e, "email")}
            />
            <input
              type="text"
              placeholder="Subject *"
              required
              onChange={(e) => handleChange(e, "subject")}
            />
            <input
              type="feedback"
              placeholder="Feedback *"
              required
              onChange={(e) => handleChange(e, "feedback")}
            />
          </div>
          <div className={classes.feedbackButton}>
            <button onClick={handleSubmit}>Send Feedback</button>
          </div>
        </div>

        <div>
      <div className={classes.buttons}>
        <button
          className={`${classes.button} ${activeLocation === 'Location 1' ? classes.active : ''}`}
          onClick={() => handleLocationToggle('Location 1')}
        >
          Kitwe
        </button>
        <button
          className={`${classes.button} ${activeLocation === 'Location 2' ? classes.active : ''}`}
          onClick={() => handleLocationToggle('Location 2')}
        >
          Lusaka
        </button>
      </div>

      <div className={classes.map}>
        {activeLocation === 'Location 1' && (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.6589036582686!2d28.20603457477205!3d-12.800638787499238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x196ce7ebfa293e21%3A0x50b9816b23fee0ef!2sSanket%20Sunsol%20Imaging%20Services%20Limited!5e0!3m2!1sen!2sin!4v1683166811460!5m2!1sen!2sin"
            width={300}
            height={300}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}

        {activeLocation === 'Location 2' && (
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.1980383825403!2d28.3652582!3d-15.419859100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f5c62f8932fd%3A0xb3eeae76198bd6a8!2sIbex%20Hill%20Lusaka!5e0!3m2!1sen!2sin!4v1687425012219!5m2!1sen!2sin"
            width={300}
            height={300}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
    </div>
      </div>
    </div>
  );
}

export default Cta;
