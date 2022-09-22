import React from "react";
import "./ExperienceCardContainer.scss";
import ExperienceCard from "../../Components/ExperienceCard/ExperienceCard";
import employment from "../../assets/data/employment";

const ExperienceCardContainer = (props) => {
  const experienceJSX = employment.map((job) => {
    return <ExperienceCard job={job} />;
  });
  return (
    <div className="experience-card-container">
      <div className="experience">
        <h2 className="experience-card-container__header  underline">
          Experience
        </h2>
      </div>
      <div className="experience-card">{experienceJSX}</div>
    </div>
  );
};

export default ExperienceCardContainer;
