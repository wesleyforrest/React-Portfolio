import React, { useState } from "react";
import "./ProjectCard.scss";
import { GrView } from "react-icons/gr";
import { BiCodeAlt } from "react-icons/bi";
//import projectsArray from "../../assets/data/projectInfo.js";

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
            </div>
            <div className="buttons-container">
              <a
                href={project.viewProjectLink}
                target="_blank"
                rel="noreferrer"
              >
                <button className="buttons-container__view-project-button">
                  <GrView size={20} />
                </button>
              </a>
              <a
                href={project.viewProjectCode}
                target="_blank"
                rel="noreferrer"
              >
                <button className="buttons-container__view-code-button">
                  <BiCodeAlt size={20} />
                </button>
              </a>
            </div>
            <div className="coding-language-container">
              {project.technologies.map((technology) => (
                <img
                  className="logo"
                  src={technology}
                  alt="technologies used"
                />
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
