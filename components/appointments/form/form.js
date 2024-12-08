import React, { useState } from "react";
import Input from "./ui/input";
import Wrapper from "./ui/wrapper";
import Title from "./ui/title";
import Dropdown from "./ui/dropdown";
import { radiologySubMenu } from "../../navBar/menuItems";
import Date from "./ui/date";
import CheckBox from "./ui/checkbox";
import Button from "./ui/button";
import classes from "./form.module.css";
import features from "../../services/features";
import axios from "axios";
import Router from "next/router";
import Loading from "./ui/loading";



function AppointmentForm() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNhimaNumber, setHasNhimaNumber] = useState(false)
  const [tncAccepted, setTncAccepted] = useState(false)
  // const currentTime = new Date().toLocaleTimeString([], {
  //   hour: '2-digit',
  //   minute: '2-digit',
  //   hour12: false
  // });

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Service: "",
    Date: "", // Set default date to today
    Time: "", // Set default time to an empty string
    Contact: "",
    selectedOption: "Forenoon",
    NhimaNumber: ""
  });
  
  const [popDetails, setPopDetails] = useState({});

  const handleChange = (event, type) => {
    setFormData({ ...formData, [type]: event.target.value });
    // console.log(formData);
    //console.log("event fired");
  };


  const validateNHIMANumber = (nhimaNumber) => {
    const nhimaRegex = /^\d{6}\/\d{2}\/\d{1}$/;

    // Example usage:
    // const nhimaNumber = '232394/68/1';
    if (nhimaRegex.test(nhimaNumber)) {
     return true;
    } else {
      return false;
    }

  }

  
  const handleSubmit = (e) => {
    // alert("Thank you for your feedback!");
    e.preventDefault();
    // console.log("Button Clicked");
    
    // valudate NHIMA number
    if (hasNhimaNumber && !validateNHIMANumber(formData.NhimaNumber)) {
      alert("Please enter a valid NHIMA number");
      return;
    }
    setIsLoading(true);
    console.log(formData);

    axios
      .post("/api/mongo", formData)
      .then((res) => {
        // const response = res.json();
        // console.log("response appointment", res.data.result);
        // console.log("response status", res.request.status, res.status);
        if (+res.status == 201) {
          setIsLoading(false);
          setPopDetails(res.data.result);
          // console.log("pop", popDetails);
          setShowPopUp(true);

          // console.log(res.result);
          // alert("Appointment has been booked successfully!");
        } else {
          alter("Something went wrong, please try later.");
          Router.push("/appointment");
        }
      })
      .catch((err) => {
        alert("Something went wrong! Please try again later.");
        console.error(err);
      });
  };

  const handleClose = () => {
    setShowPopUp(false);
    Router.push("/");
  };

  const generateRandomNumber = () => {
    const val = Math.random();
    return val;
  };
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    const today = today;

    if (selectedDate < today) {
      alert("Please select a future date");
    } else {
      setFormData((data) => ({ ...data, Date: event.target.value }));
    }
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setFormData((data) => ({ ...data, Time: event.target.value }));
  };
  const handleOptionChange = (event) => {
    setFormData((data) => ({ ...data, selectedOption: event.target.value }));
  };

  return (
    <Wrapper>
      {isLoading && <Loading />}
      <Title>Schedule your visit</Title>
      <Input
        title="fullname"
        type="text"
        name="Full Name"
        displayName="Name"
        onChange={(e) => handleChange(e, "Name")}
        value={formData.Name}
      />
      <Input
        title="email"
        type="email"
        name="Email Id"
        displayName="Email"
        onChange={(e) => handleChange(e, "Email")}
        value={formData.Email}
      />
      <Input
        title="phno"
        type="tel"
        name="Contact-Number"
        displayName="Contact"
        onChange={(e) => handleChange(e, "Contact")}
        value={formData.Contact}
      />
      <label>
        <select
          className={classes.dropdown}
          name="service"
          value={formData.Service}
          onChange={(event) => handleChange(event, "Service")}
          required
        >
          <option value="">--Select a service--</option>
          {features.map((feature, index) => (
            <option key={index} value={feature.title}>
              {feature.title}
            </option>
          ))}
        </select>
      </label>

      <div className={classes.radio} required>
        <label>
          <input
            type="radio"
            value="Forenoon"
            checked={formData.selectedOption === "Forenoon"}
            onChange={handleOptionChange}
          />
          Forenoon
        </label>
        <label>
          <input
            type="radio"
            value="Afternoon"
            checked={formData.selectedOption === "Afternoon"}
            onChange={handleOptionChange}
          />
          Afternoon
        </label>
        <label>
          <input
            type="radio"
            value="Evening"
            checked={formData.selectedOption === "Evening"}
            onChange={handleOptionChange}
          />
          Evening
        </label>
      </div>
      <CheckBox displayName="Have a NHIMA number?" name="NhimaNumberCheckbox" value={setHasNhimaNumber} onChange={(e)=> setHasNhimaNumber(!hasNhimaNumber)}/>
      {hasNhimaNumber && (
        <Input
        title="nhimaNumber"
        type="text"
        name="Nhima Number"
        displayName="Nhima Number"
        placeholder="232394/68/1"
        onChange={(e) => handleChange(e, "NhimaNumber")}
        value={formData.NhimaNumber}
      />
      )}
      <CheckBox displayName="I agree the Terms & Conditions" name="tncAccepted" value={tncAccepted} onChange={(e) => setTncAccepted(!tncAccepted)}/>
      <div className={classes.flex}>
        <div className={classes.date}>
          <input
            type="date"
            value={formData.Date}
            onChange={handleDateChange}
            defaultValue={"2023-01-01"}
          />
          <input
            type="time"
            value={formData.Time}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <div className={classes.flex}>
        <Button onClick={handleSubmit} disabled={!tncAccepted}>Book Appointment</Button>
      </div>
      {showPopUp && (
        <div className={classes.modalOverlay}>
          <div className={classes.modalContent}>
            <h2>Appointment details</h2>
            {Object.entries(popDetails).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}

            <Button onClick={handleClose}>Close</Button>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default AppointmentForm;
