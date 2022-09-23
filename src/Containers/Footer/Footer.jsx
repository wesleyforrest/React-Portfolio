import React from "react";
import "./Footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icon-container">
        <div className=" footer__icon footer__icon-linkedin">
          <BsLinkedin size={30} />
        </div>
        <div className="footer__icon footer__icon-github">
          <BsGithub size={30} />
        </div>
        <div className="footer__icon footer__icon-cv">
          <h2>CV</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
