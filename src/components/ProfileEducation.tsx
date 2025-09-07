import React from 'react';

const ProfileEducation: React.FC = () => {
  return (
    <div className="profileEducation">
      <h2>Education</h2>
      <ul>
        <li>
          <div className="education-line">University at Buffalo (SUNY)</div>
          <div className="education-line">Bachelor of Science in Computer Science</div>
          <div className="education-line">Latin Honor (Cum Laude), Dean's List</div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileEducation;
