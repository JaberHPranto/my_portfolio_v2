import React from "react";
import ProjectsSectionMobile from "../components/projects/ProjectSectionMobile";
import ProjectSectionWeb from "../components/projects/ProjectSectionWeb";
import useMobileDevice from "../hooks/useMobileDevice";

const Projects = () => {
  const isMobile = useMobileDevice();
  return (
    <div>{isMobile ? <ProjectsSectionMobile /> : <ProjectSectionWeb />}</div>
  );
};

export default Projects;
