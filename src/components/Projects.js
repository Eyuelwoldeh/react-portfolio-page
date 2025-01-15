import React from 'react';

const Projects = () => {
  const projects = [
  ];

  return (
    <section id="projects">
      <h1>!PAGE UNDER MAINTAINANCE!</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
