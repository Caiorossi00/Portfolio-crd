import React from "react";
import logo from "../assets/images/1.png";
import "../assets/css/Header.scss";

const Header = () => {
  return (
    <div id="container-header" data-aos="fade-down">
      <div id="header-left">
        <img src={logo} alt="Logo" className="logo" /> <h1>CaioRossi.dev</h1>
      </div>
      <button>My Works</button>
    </div>
  );
};

export default Header;
