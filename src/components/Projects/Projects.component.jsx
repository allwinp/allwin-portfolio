import "./Projects.styles.css";

import { projectsData } from "./Projects.data";

import { AppstoreOutlined } from "@ant-design/icons";

const Projects = () => {
  return (
    <div id="projects-page">
      <AppstoreOutlined className="projects-icon" />
      <h1>Apps I've built </h1>
      <div id="projects-container">
        {projectsData.map(({ name, url, description }) => (
          <img alt={name} src={url} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
