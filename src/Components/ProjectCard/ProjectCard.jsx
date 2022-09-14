import React from "react";
import "./ProjectCard.scss";
import projectsArray from "../../assets/data/projectInfo.js";

const ProjectCard = (props) => {
  const { project } = props;
  console.log(projectsArray);
  return (
    <div className="project-card">
      <div className="project-card flip-card">
        <div className="project-card flip-card-inner">
          <div className="project-card flip-card-front">
            <img src={project.projectImage} alt={project.projectName} />
            <div className="project-name-line">
              <h3>{project.projectName}</h3>
              <button className="view-project">View Project</button>
              <button className="view-code">View Code</button>
            </div>
            <div className="coding-language-container">
              <div className="coding-language">{project.html}</div>
              <div className="coding-language">{project.javaScript}</div>
              <div className="coding-language">{project.react}</div>
              <div className="coding-language">{project.Java}</div>
            </div>
          </div>
          <div className="flip-card-back">
            <h2>Description</h2>
            <p className="card-back">{project.projectDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
