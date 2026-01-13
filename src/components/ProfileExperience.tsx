import React, { useState } from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ 
  title, 
  company, 
  duration, 
  description, 
  technologies 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExperience = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className={`experience-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="experience-header" onClick={toggleExperience}>
        <span className="experience-title">{title}</span>
        <span className="expand-icon">{isExpanded ? '▲' : '▼'}</span>
      </div>
      <div 
        className="experience-description" 
        style={{ maxHeight: isExpanded ? 'none' : '0' }}
      >
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Duration:</strong> {duration}</p>
        <p>{description}</p>
        <p><strong>Technologies:</strong> {technologies}</p>
      </div>
    </li>
  );
};

const ProfileExperience: React.FC = () => {
  const experiences = [
    {
      title: "BlockChain Engineer",
      company: "LN Compute (Atlanta, GA)",
      duration: "April 2025 - Present",
      description: "Designed and implemented performance-oriented smart-contract systems using Solidity, Huff, and Yul, emphasizing deterministic execution, correctness, and auditability. Built backend services in TypeScript / Node.js to coordinate state transitions and event-driven workflows across distributed participants. Modeled operational workflows using SQL and structured data analysis, identifying bottlenecks and translating real-world constraints into system-level optimizations. Developed data pipelines and monitoring logic to support real-time state visibility and fault detection, concepts directly applicable to trading and settlement systems. Quant signal: deterministic systems, correctness under constraints, data-driven optimization.",
      technologies: "Solidity, Huff, Yul, TypeScript, Node.js, SQL, Smart Contracts, Data Pipelines"
    },
    {
      title: "AI Development Intern — Research & Development",
      company: "Copani (Cicero, NY)",
      duration: "June 2024 - August 2024",
      description: "Preprocessed and analyzed structured datasets using Python (Pandas, NumPy) with statistical validation to ensure data integrity. Implemented a CNN model in TensorFlow, focusing on reproducibility, numerical stability, and evaluation metrics. Deployed a RESTful inference service using Flask, emphasizing reliability, latency awareness, and production readiness. Quant signal: numerical computing, data pipelines, production systems.",
      technologies: "Python, Pandas, NumPy, TensorFlow, Flask, CNN, Machine Learning"
    }
  ];

  return (
    <div className="profileWorkingExperience">
      <h2>Working Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
            technologies={exp.technologies}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProfileExperience;
