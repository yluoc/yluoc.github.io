import React from 'react';
import Head from 'next/head';
import TopNav from '../components/TopNav';
import ProfileHeader from '../components/ProfileHeader';
import ProfileIntroduction from '../components/ProfileIntroduction';
import ProfileSkills from '../components/ProfileSkills';
import SiteFooter from '../components/SiteFooter';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bill Luo</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <TopNav />
      <ProfileHeader />
      <ProfileIntroduction />
      <ProfileSkills />
      <SiteFooter />
    </>
  );
};

export default Home;
