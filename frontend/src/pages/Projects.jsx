import React from "react";
import Project from "../components/Project";
import { useSelector } from "react-redux";
import { selectProjects } from "../redux/userSlice.js";

const Projects = () => {
  const projects = useSelector(selectProjects);
  return (
    <div className="container mx-auto">
      <Project projects={projects} />
    </div>
  );
};

export default Projects;
