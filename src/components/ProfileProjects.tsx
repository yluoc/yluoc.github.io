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
      title: "DeSSN - Blockchain Address Analyzer",
      url: "https://github.com/yluoc/DeSSN",
      description: "A comprehensive blockchain address analysis tool that provides detailed insights about wallet activity, DeFi interactions, and calculates a Blockchain Credit Score (300-850 range) based on on-chain behavior. Helps web3 users have a safer experience in the web3 world.",
      technologies: "Next.js, TypeScript, Etherscan API, DeBank API, Web3, Blockchain Analysis"
    },
    {
      title: "CNN Based 2D Image to 3D Model",
      url: "https://github.com/yluoc/CNNBased_2DImgTo3DMdl",
      description: "Developed a CNN-based model that can predict 3D objects from 2D images. Achieved 100% accuracy for simple objects and 94% accuracy for complex objects with colorful backgrounds. This project demonstrates advanced computer vision and deep learning techniques.",
      technologies: "Python, TensorFlow, CNN, Computer Vision"
    },
    {
      title: "Decentralized Stable Coin (DSC)",
      url: "https://github.com/yluoc/defi",
      description: "Built a decentralized stable coin system with smart contracts that maintain price stability through algorithmic mechanisms. Implemented collateral management and liquidation protocols for DeFi applications.",
      technologies: "Solidity, Ethereum, DeFi, Smart Contracts, OpenZeppelin"
    },
    {
      title: "Next.js based RESTful API for DSC",
      url: "https://github.com/yluoc/dsc-app-backend",
      description: "Developed a comprehensive backend API for the Decentralized Stable Coin application using Next.js. Provides secure endpoints for user management, transaction processing, and blockchain integration.",
      technologies: "Next.js, Node.js, Ethers.js, RESTful API, Blockchain Integration"
    },
    {
      title: "AI-based NFT Generator",
      url: "https://github.com/yluoc/Donattelo",
      description: "Created an AI-powered NFT generation platform that uses machine learning algorithms to create unique digital art. Users can generate, customize, and mint NFTs with AI assistance.",
      technologies: "GenAI, Gemini API, NFT, Blockchain, Python, React"
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
