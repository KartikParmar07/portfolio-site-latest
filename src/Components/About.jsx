import React from "react";
import Profile from "../Assets/Profile-png.png";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about">
          <div className="about-box1">
            <h1>Kartik Parmar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nulla quod molestias voluptatibus dolor repudiandae aspernatur
              beatae ratione, necessitatibus, vel magnam! Sapiente magni rerum
              expedita sequi ut vel nulla vero?
            </p>
          </div>
          <div className="about-box2">
            <div className="img-bg">
              <img src={Profile} alt="Profile" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
