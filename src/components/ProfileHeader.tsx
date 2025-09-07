import React from 'react';
import Image from 'next/image';

const ProfileHeader: React.FC = () => {
  return (
    <div className="profileHeader">
      <Image 
        className="profilePhoto" 
        src="/assets/profilePhoto.jpg" 
        alt="profile photo"
        width={200}
        height={200}
      />
      <h1 className="profileName">Yicheng Luo  罗一诚</h1>

      <nav className="profileSocial">
        <ul>
          <li><a href="/assets/Yicheng-Luo-Resume.pdf">Resume</a></li>
          <li><a href="https://github.com/yluoc">Github</a></li>
          <li><a href="https://www.linkedin.com/in/yicl0914/?locale=en_US">LinkedIn</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileHeader;
