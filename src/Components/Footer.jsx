import React from "react";
import { GiPhone, GiMailbox } from "react-icons/gi";

const Footer = () => {
  return (
    <>
      <div className="footer-contain">
        <div className="footer">
          <div className="footer-box1">
            <h1 className="logo">
              K<span>$</span>P
            </h1>
            <p>
              Archetypes of the MODERN. identity are reinvented through details.
            </p>
            <div>
              <span>
                <GiPhone /> +91 8828445595
              </span>
              <br />
              <br />
              <span>
                <GiMailbox /> kartiksparmar7@gmail.com
              </span>
            </div>
          </div>
          <div className="footer-box2">
            <div className="contain1">
              <h3>Pages</h3>
              <p>Home</p>
              <p>Pages</p>
              <p>Portfolio</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div className="contain2">
                <h3>Services</h3>
                <p>Fullstack</p>
                <p>Frontend</p>
                <p>Freelance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-signature"><p>Copyright © 2023 MYFOLIO. All Rights Reserved. </p></div>
    </>
  );
};

export default Footer;
