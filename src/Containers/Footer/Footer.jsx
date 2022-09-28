import React from "react";
import "./Footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icon-container">
        <a
          href={"https://www.linkedin.com/in/wesley-forrest-6a846b15/"}
          target="_blank"
          rel="noreferrer"
        >
          <div className=" footer__icon footer__icon-linkedin">
            <BsLinkedin size={30} />
          </div>
        </a>
        <a
          href={"https://github.com/wesleyforrest"}
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer__icon footer__icon-github">
            <BsGithub size={30} />
          </div>
        </a>
        <a
          href={"./Images/Wesley Forrest CV 2022.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer__icon footer__icon-cv">
            <h2>CV</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
