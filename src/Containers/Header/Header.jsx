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
        <h1 className="header-section__job-title">
          Junior Software<span className="underline-gold"> Developer</span>
        </h1>
        <div>________</div>
      </div>
    </div>
  );
};

export default Header;
