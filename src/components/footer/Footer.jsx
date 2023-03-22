import React from "react";
import "./Footer.scss";
import { ImInstagram } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="contact">
        <p>info@megalemon.net</p>
      </div>
      <div className="foorter-menu">
        <div className="logo">
          <img src="logo.png" alt="MegaLemon Logo" />
        </div>
        <div className="socialMedia">
          <a
            target="_blank"
            href="https://www.instagram.com/MegaLemon.architecture/"
          >
            <ImInstagram />
          </a>
          <a target="_blank" href="http://www.linkedin.com/in/MegaLemon">
            <ImLinkedin />
          </a>
          <a target="_blank" href="https://wa.me/905550644012">
            <FaWhatsappSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
