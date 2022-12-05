import React from "react";
import "./Technologies.styles.css";

import { BranchesOutlined } from "@ant-design/icons";

const technologies = [
  "JavaScript & TypeScript",
  "React",
  "Node",
  "Next.js",
  "GraphQL",
  "HTML & CSS",
];

const Technologies = () => {
  return (
    <div id="technologies-page">
      <div className="technologies-info-container">
        <BranchesOutlined className="technologies-icon" />
        <h1>Technologies </h1>
      </div>
      <div className="technologies-container">
        {technologies.map((technology) => (
          <div className="technology">
            <BranchesOutlined className="technology-icon" />
            <h2 className="technology-text"> {technology}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
