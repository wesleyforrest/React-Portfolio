import React from "react";
import "./Main.scss";
import ProjectCardContainer from "../ProjectCardContainer/ProjectCardContainer";

const Main = () => {
  return (
    <div>
      <h1 className="portfolio__heading">Portfolio</h1>
      <ProjectCardContainer />
    </div>
  );
};

export default Main;
