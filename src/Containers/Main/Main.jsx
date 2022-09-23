import React from "react";
import "./Main.scss";
import ProjectCardContainer from "../ProjectCardContainer/ProjectCardContainer";
import About from "../About/About";
import ExperienceCardContainer from "../ExperienceCardContainer/ExperienceCardContainer";
import InterestsCardContainer from "../InterestsCardContainer/InterestsCardContainer";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <h1 className="portfolio__heading">Portfolio</h1>
      <ProjectCardContainer />
      <About />
      <ExperienceCardContainer />
      <InterestsCardContainer />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
