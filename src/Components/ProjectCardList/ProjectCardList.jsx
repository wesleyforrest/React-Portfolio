import React from "react";
import "../ProjectCardList/ProjectCardList.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectInfo from "../../assets/data/projectInfo";

const ProjectCardList = (props) => {
  const projectJSX = projectInfo.map((project) => {
    return <ProjectCard project={project} />;
  });
  return <div className="project-list">{projectJSX}</div>;
};

export default ProjectCardList;
