import React from "react";
import "../assets/css/Hero.scss";
import logo from "../assets/images/1.png";

const Hero = () => {
  return (
    <div id="container-hero">
      <div className="hero-text">
        <p>
          Hey, I'm Caio Rossi and I love playing around with shapes and colours
          on the internet, making things look shiny and cool!
        </p>
        <div>
          <button>Lorem</button>
          <button>Lorem</button>
        </div>
      </div>
      <img src={logo}></img>
    </div>
  );
};

export default Hero;
