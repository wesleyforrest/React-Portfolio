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
              <h3 className="project-name-line__project-name">
                {project.projectName}
              </h3>
              <button className="project-name-line__view-project">
                View Project
              </button>
              <button className="project-name-line__view-code">
                View Code
              </button>
            </div>
            <div className="coding-language-container">
              <img src={project.html} alt="html" />
              <img src={project.javaScript} alt="javaScript" />
              <img src={project.react} alt="React" />
              <img src={project.java} alt="Java" />
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
