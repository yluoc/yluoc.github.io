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
      title: "Blockchain Engineer",
      company: "LN Compute",
      duration: "2024 - Present",
      description: "Working on blockchain technology solutions, focusing on smart contract development and DeFi applications. Contributing to the development of decentralized financial systems and blockchain infrastructure.",
      technologies: "Solidity, Ethereum, Smart Contracts, DeFi, Foundry, Hardhat, Uniswap(v2, v3), Curve, Solana, Chainlink, Huff, Yul"
    },
    {
      title: "Software Development Intern",
      company: "Copani",
      duration: "2024",
      description: "Developed AI models and machine learning solutions. Worked on computer vision projects and contributed to the development of innovative AI applications.",
      technologies: "Python, AI/ML, TensorFlow, Computer Vision, Deep Learning"
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
