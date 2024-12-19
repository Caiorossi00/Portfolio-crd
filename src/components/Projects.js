import React, { useState, useEffect } from "react";
import projects from "../assets/data/projects";
import logo from "../assets/images/1.png";
import "../assets/css/Projects.scss";

// Há problemas de sincronização entre os elementos que precisam ser resolvidos

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 4000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    }, 40);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <div id="container-projects">
      <div className="progress-bar">
        <div
          style={{
            width: `${progress}%`,
          }}
        ></div>
        <div>
          <img src={logo} alt="logo Caiorossi.dev" />
          <h1>@Caiorossi.dev</h1>
        </div>
      </div>
      <div className="project-details">
        <h2>{currentProject.name}</h2>
        <p>{currentProject.description}</p>
        <img src={currentProject.picture} alt={currentProject.name} />
        <div className="project-buttons">
          <a href={currentProject.link}>Acesse o projeto</a>
          <a href="#container-projects">Outro acesso</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
