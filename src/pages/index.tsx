import React from 'react';
import Head from 'next/head';
import ProfileHeader from '../components/ProfileHeader';
import ProfileIntroduction from '../components/ProfileIntroduction';
import ProfileEducation from '../components/ProfileEducation';
import ProfileExperience from '../components/ProfileExperience';
import ProfileProjects from '../components/ProfileProjects';
import ProfileSkills from '../components/ProfileSkills';
import ProfileCertifications from '../components/ProfileCertifications';
import ProfileContact from '../components/ProfileContact';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Yicheng Luo Main Page</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <ProfileHeader />
      <ProfileIntroduction />
      <ProfileEducation />
      <ProfileExperience />
      <ProfileProjects />
      <ProfileSkills />
      <ProfileCertifications />
      <ProfileContact />
    </>
  );
};

export default Home;
