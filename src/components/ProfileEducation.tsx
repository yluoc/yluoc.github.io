import React from 'react';

const ProfileEducation: React.FC = () => {
  return (
    <div className="profileEducation">
      <h2>Education</h2>
      <ul>
        <li>
          <div className="education-line">WorldQuant University</div>
          <div className="education-line">Master of Science in Financial Engineering</div>
        </li>
        <li>
          <div className="education-line">University at Buffalo. The State University of New York</div>
          <div className="education-line">Bachelor of Engineering, Computer Science</div>
          <div className="education-subsection">Latin Honor: Cum Laude, Dean's List</div>
          <div className="education-subsection">Relevant Coursework: Algorithms · Probability & Statistics · Operating Systems · Distributed Systems · Numerical Computing</div>
        </li>
      </ul>
    </div>
  );
};

export default ProfileEducation;
