import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Projects } from "@/constants";

const ProjectsPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[url('/mountains.jpg')] bg-cover bg-center">
      <div className="grid grid-cols-2 gap-5 max-w-[90%] max-h-[90%]">
        {Projects.map((project, projectIndex) => (
          <ProjectCard
            key={projectIndex}
            image={project.src}
            title={project.title}
            text={project.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
