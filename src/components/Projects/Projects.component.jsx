import "./Projects.styles.css";

import { projectsData } from "./Projects.data";

import { AppstoreOutlined } from "@ant-design/icons";

const Projects = () => {
  return (
    <div id="projects-page">
      <AppstoreOutlined className="projects-icon" />
      <h1>Apps I've built </h1>
      <div id="projects-container">
        {projectsData.map(({ name, url, description, webaddress }) => (
          <div className="img-container">
            <img alt={name} src={url} loading="lazy" />

            <a href={webaddress} target="_blank" rel="noopener noreferrer">
              <div className="hover-data">
                <p className="description">
                  <span className="title">{name}</span>
                  {description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
