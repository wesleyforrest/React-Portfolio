import React from "react";

const ProjectCard = (props) => {
  const { projectsArray } = props;
  return (
    <div className="project-card">
      <div className="project-card flip-card">
        <div className="project-card flip-card__inner">
          <div className="project-card flip-card__front">
            <img src={projectsArray.projectName} alt="calculator" />
            <div className="project-name-line">
              <h3>{projectsArray.projectName}</h3>
              <button className="view-project">hello</button>
              <button className="view-code"></button>
            </div>
            <div className="coding-language-container">
              <div className="coding-language"></div>
              <div className="coding-language"></div>
              <div className="coding-language"></div>
              <div className="coding-language"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
