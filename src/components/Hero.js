import React from "react";
import "../assets/css/Hero.scss";
import logo from "../assets/images/1.png";

const Hero = () => {
  return (
    <div id="container-hero">
      <div className="hero-text">
        <p>
          Hey, I'm <span>Caio Rossi</span> and I love playing around with shapes
          and colours on the internet, making things look shiny and cool!
        </p>
        <div id="button-hero-div">
          <button>Contact Me</button>
          <button>Contact Me</button>
        </div>
      </div>
      <img src={logo} alt="Caiorossi.dev Logo"></img>
    </div>
  );
};

export default Hero;
