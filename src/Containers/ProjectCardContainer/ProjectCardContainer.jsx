import React from "react";
import "./ProjectCardContainer.scss";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectInfo from "../../assets/data/projectInfo";

const ProjectCardContainer = (props) => {
  const projectJSX = projectInfo.map((project) => {
    return <ProjectCard project={project} />;
  });
  return <div className="project-card-container">{projectJSX}</div>;
};

export default ProjectCardContainer;
