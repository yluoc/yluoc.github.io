import React from 'react';

const ProfileSkills: React.FC = () => {
  return (
    <div className="profileSkills">
      <h2>Tech Stack</h2>
      <ul>
        <li>
          <h5>Programming Languages:</h5>
          <p>Python (NumPy, Pandas, vectorized computation), C++, Typescript, Javascript, Solidity, Yul</p>
        </li>

        <li>
          <h5>Quant & Data:</h5>
          <p>Probability & statistics, time-series concepts, PnL attribution, drawdown & volatility analysis, numerical modeling</p>
        </li>

        <li>
          <h5>Trading & Crypto Systems:</h5>
          <p>Market data ingestion (REST / WebSocket), exchange API integration, order-lifecycle concepts, DeFi protocol mechanics, EVM execution and gas dynamics</p>
        </li>

        <li>
          <h5>Infrastructure & Systems:</h5>
          <p>Linux, Docker, AWS, PostgreSQL, Redis, Git</p>
        </li>

        <li>
          <h5>Smart-contract tooling:</h5>
          <p>Foundry, Hardhat, OpenZeppelin, Chainlink</p>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSkills;
