import React from "react";
import "../assets/css/Header.scss";
import logo from "../assets/images/1.png";

const Header = () => {
  return (
    <div id="container-header">
      <div id="header-left">
        <img src={logo} alt="Logo" className="logo" /> <h1>CaioRossi.dev</h1>
      </div>
      <button>My Works</button>
    </div>
  );
};

export default Header;
