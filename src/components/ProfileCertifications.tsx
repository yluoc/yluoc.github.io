import React from 'react';

const ProfileCertifications: React.FC = () => {
  return (
    <div className="profileCertifications">
      <h2>Certifications</h2>
      <ul>
        <li>
          <a href="https://www.codecademy.com/profiles/board1331474868/certificates/8e9e59de3f924b33ad2371faf667129b">
            Data Scientist: Machine Learning
          </a>
        </li>
        <li>
          <a href="https://www.codecademy.com/profiles/board1331474868/certificates/6f8e0510ca91437a847b53aa9e9aa3f1">
            Machine Learning/AI Engineer
          </a>
        </li>
        <li>
          <a href="https://www.codecademy.com/profiles/board1331474868/certificates/810f53d14de24b938cc13c7c2af1e686">
            Back-End Engineer
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCertifications;
