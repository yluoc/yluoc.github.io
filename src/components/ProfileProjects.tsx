import React, { useState } from 'react';

interface ProjectItemProps {
  title: string;
  url: string;
  description: string;
  technologies: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  title, 
  url, 
  description, 
  technologies 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProject = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className={`project-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="project-header" onClick={toggleProject}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
      </div>
      <div 
        className="project-description" 
        style={{ maxHeight: isExpanded ? 'none' : '0' }}
      >
        <p>{description}</p>
        <p><strong>Technologies:</strong> {technologies}</p>
      </div>
    </li>
  );
};

const ProfileProjects: React.FC = () => {
  const projects = [
    {
      title: "High-Performance Limit Order Book & Matching Engine",
      url: "#",
      description: "A high-performance limit order book and matching engine implementation.",
      technologies: "C++, Python, Trading Systems, Data Structures"
    },
    {
      title: "Real-Time Crypto Market Data Pipeline with Latency Analysis",
      url: "#",
      description: "Real-time cryptocurrency market data pipeline with comprehensive latency analysis capabilities.",
      technologies: "Python, WebSocket, REST API, Data Pipelines, Time-Series Analysis"
    }
  ];

  return (
    <div className="profileProjects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            url={project.url}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileProjects;
