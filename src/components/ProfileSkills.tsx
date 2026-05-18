import React from 'react';

const skills: string[] = ['Python', 'C/C++', 'Rust', 'Cloud', 'Go', 'Linux', 'Distributed System'];

const ProfileSkills: React.FC = () => {
  return (
    <section className="section yellow profileSkills">
      <div className="section-inner">
        <h2>Skills</h2>
        <div className="skills-row">
          {skills.map((s) => (
            <div className="skill-chip" key={s}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSkills;
