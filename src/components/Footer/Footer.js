import React from "react";
import "./Footer.scss";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter-circled.png";
import github from "../../images/github.png";
import instagram from "../../images/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer container3">
        <div className="brand">
          <h1><span>K</span>urmi <span>S</span>ourav</h1>
        </div>
        <h2>@2023, Movie, Inc. or its Affiliates</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="https://github.com/tonystark5683"><img src={github} alt="GitHub" /></a>
          </div>
          <div className="social-item">
            <a href="https://www.instagram.com/kurmi_sourav_patel/"><img src={instagram} alt="Instagram" /></a>
          </div>
          <div className="social-item">
            <a href="https://twitter.com/SouravKurmi9"><img src={twitter} alt="Twitter" /></a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/souravpatel5683"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
