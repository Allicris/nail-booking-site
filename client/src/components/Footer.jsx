import React from "react";
import { Link } from "react-router-dom";
import visaLogo from "../assets/images/visa-logo.png";
import mastercardLogo from "../assets/images/mastercard-logo.png";
import amexLogo from "../assets/images/amex-logo.png";
import discoverLogo from "../assets/images/discover-logo.png";
import "../styles/background.css";

const Footer = () => {
  const smallImageStyle = {
    maxWidth: "40px",
  };

  const shadow = {
    textShadow: "2px 2px 2px #FD5C7E",
  };

  const creditCardTypes = [
    { logo: visaLogo },
    { logo: mastercardLogo },
    { logo: amexLogo },
    { logo: discoverLogo },
  ];

  return (
    <div className="text-white text-center d-flex flex-column align-items-center">
      <p style={shadow}>We accept all major credit cards</p>
      <div className="d-flex flex-row" style={{ margin: "auto" }}>
        {creditCardTypes.map((cardType, index) => (
          <div key={index}>
            <img
              src={cardType.logo}
              alt={`Credit Card ${index}`}
              style={{ ...smallImageStyle, margin: "0 10px" }}
            />
          </div>
        ))}
      </div>
      <div>
        <p>
          Contact Us: &nbsp;
          <a href="mailto:bookings@maanailheaven.com">
            bookings@maanailhaven.com
          </a>
        </p>
      </div>
      <div>
        <p style={shadow}>
          Developed By Anne Mary, Maureen and Allison with 🤍.
        </p>
      </div>
    </div>
  );
};

export default Footer;
