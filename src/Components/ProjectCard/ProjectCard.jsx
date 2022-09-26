import React, { useState } from "react";
import "./ProjectCard.scss";
import projectsArray from "../../assets/data/projectInfo.js";

const ProjectCard = (props) => {
  const { project } = props;

  const [isFlipped, setIsFlipped] = useState(false);
  let flippedStyle = isFlipped ? "flipped" : "";
  return (
    <div className="project-card">
      <div className="project-card flip-card">
        <div className={`project-card flip-card-inner ${flippedStyle}`}>
          <div
            className="project-card flip-card-front"
            onClick={() => setIsFlipped(true)}
          >
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
              {project.technologies.map((technology) => (
                <img src={technology} alt="technologies used" />
              ))}
            </div>
          </div>
          <div className="flip-card-back" onClick={() => setIsFlipped(false)}>
            <h2>Description</h2>
            <p className="card-back">{project.projectDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
