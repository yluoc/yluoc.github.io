import React from 'react';
import Image from 'next/image';

const ProfileHeader: React.FC = () => {
  return (
    <header className="profileHeader">
      <h1 className="profileName">Bill Luo</h1>
      <p className="profileTagline">Computer Systems Engineer</p>

      <Image
        className="profilePhoto"
        src="/assets/profilePhoto.jpg"
        alt="Yicheng Luo profile photo"
        width={200}
        height={200}
        priority
      />

      <nav className="profileSocial">
        <ul>
          <li><a href="/assets/YichengLuo_QD_Resume.pdf">Resume</a></li>
          <li><a href="https://github.com/yluoc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/yicl0914/?locale=en_US" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:nathan.yicluo@gmail.com">Email</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default ProfileHeader;
