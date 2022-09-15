import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-section__heading">
        <h3 className="header-section__first-name">
          Wesley <span className="header-section__surname">Forrest</span>
        </h3>
      </div>
      <div className="header-section__sub-heading">
        <h1 className="header-section__job-title">Junior Software Developer</h1>
        <div className="header-section__underline-gold">________</div>
      </div>
      <div className="header-section__course-summary">
        <p className="header-section__course-summary-text">
          I recently applied for and got accepted to join the nology 12 week
          intensive full stack consultancy coding bootcamp program. The course
          took me from having virtually no coding knowledge through modules in
          html, scss, javaScript, React and Java. This portfolio showcases the
          skills I have learned during this process.{" "}
        </p>
      </div>
    </div>
  );
};

export default Header;
