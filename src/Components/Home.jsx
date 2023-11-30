import React from "react";
import Button from './Button'
import HeroImg from '../Assets/hero.png'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-contain">
          <div className="home-box1">
            <p>Hey There,</p>
            <h2>
              I'M <span>Kartik</span>
            </h2>
            <h2>A Fullstack Dev</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              vero, iusto facere, accusantium quaerat esse reprehenderit tempore
              enim consectetur accusamus eveniet impedit, alias praesentium et
              vitae quos nostrum est repellat?
            </p>
            <Button />
          </div>
          <div className="home-box2">
            <img src={HeroImg} alt="" className="hero-img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
