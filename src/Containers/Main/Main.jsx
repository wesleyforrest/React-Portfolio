import React from "react";
import "./Main.scss";
import ProjectCardContainer from "../ProjectCardContainer/ProjectCardContainer";
import About from "../About/About";
import ExperienceCardContainer from "../ExperienceCardContainer/ExperienceCardContainer";

const Main = () => {
  return (
    <div>
      <h1 className="portfolio__heading">Portfolio</h1>
      <ProjectCardContainer />
      <About />
      <ExperienceCardContainer />
    </div>
  );
};

export default Main;
