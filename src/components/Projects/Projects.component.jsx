import "./Projects.styles.css";

import { projectsData } from "./Projects.data";

const Projects = () => {
  return (
    <div id="projects-page">
      <div id="projects-container">
        {projectsData.map(({ name, url, description }) => (
          <img alt={name} src={url} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
