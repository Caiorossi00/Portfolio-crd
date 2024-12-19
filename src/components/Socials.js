import React from "react";
import "../assets/css/Socials.scss";

// TODO: Fazer de toda div, a âncora

const Socials = () => {
  return (
    <div id="container-socials" data-aos="fade-up">
      <h1>Redes sociais</h1>
      <div className="instagram">
        <i className="fa-brands fa-instagram"></i>
        <a
          href="https://www.instagram.com/caiorossi.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="linkedin">
        <i className="fa-brands fa-linkedin"></i>
        <a
          href="https://www.linkedin.com/in/caio-rossi-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
      <div className="whatsapp">
        <i className="fa-brands fa-whatsapp"></i>
        <a
          href="https://wa.me/55359859952"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whatsapp
        </a>
      </div>
      <div className="github">
        <i className="fa-brands fa-github"></i>
        <a
          href="https://github.com/Caiorossi00"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Socials;
