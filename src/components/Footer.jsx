import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import globeImage from "./images-removebg-preview.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <p>&copy; 2024 All rights reserved by Ugnius</p>
        <div className="social-media-icons">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
        <p className="contact">Contact me:</p>
        <p>
          <span className="number">+37066666666</span> or
          <span className="email"> example@example.com</span>
        </p>
      </div>

      <div>
        <img src={globeImage} alt="globe" className="globe-img" />
      </div>
    </div>
  );
}

export default Footer;
