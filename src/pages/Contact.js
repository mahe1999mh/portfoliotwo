import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  return (
    <div className="contactPage">
      <div className="Contact">
        <h3>Contact</h3>
        <h2>Don't be shy! Hit me up! 👇</h2>
        <div className="contactData">
          <div className="location">
            <div className="icons">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                size="2xl"
                style={{ color: "#147efb" }}
              />
            </div>
            <h3>Location</h3>
            <h4>Bangalore, India</h4>
          </div>
          <div className="mail">
            <div className="icons">
              <FontAwesomeIcon
                icon={faEnvelopeOpenText}
                size="2xl"
                style={{ color: "#147efb" }}
              />
            </div>
            <h3>Mail</h3>
            <h4>mahe1999mh@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
