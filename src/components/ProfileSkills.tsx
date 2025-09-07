import React from 'react';

const ProfileSkills: React.FC = () => {
  return (
    <div className="profileSkills">
      <h2>Tech Stack</h2>
      <ul>
        <li>
          <h5>Programming Languages:</h5>
          <p>Python, C++, C, JavaScript, TypeScript, Solidity, Rust</p>
        </li>

        <li>
          <h5>Frameworks:</h5>
          <p>React.js, Next.js, Node.js, Express.js, Flask, FastAPI, MongoDB, PostgreSQL</p>
        </li>

        <li>
          <h5>Blockchain:</h5>
          <p>Ethers.js, Foundry, Hardhat, Uniswap(v2, v3), Curve, Solana, Chainlink, Huff, Yul</p>
        </li>

        <li>
          <h5>Tools:</h5>
          <p>Git, Docker, AWS, Azure, CI/CD, DevOps</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSkills;
