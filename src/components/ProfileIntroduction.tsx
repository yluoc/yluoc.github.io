import React from 'react';

const ProfileIntroduction: React.FC = () => {
  return (
    <section className="section dark profileIntroduction">
      <div className="section-inner">
        <h2>About Me</h2>
        <p>
          I graduated from the <strong>University at Buffalo</strong> with a B.S. in Computer
          Science &amp; Engineering, and now work as a software engineer at{' '}
          <a href="https://www.lncompute.com/" target="_blank" rel="noopener noreferrer">
            LN Compute
          </a>
          , a digital infrastructure company. My day-to-day is designing and building distributed
          systems &mdash; the monitoring, observability, and performance pipelines that keep them
          honest at scale.
        </p>
        <p>
          Outside of work, I&apos;m deep into <strong>trading systems</strong>. I&apos;ve built a
          handful of crypto trading bots across different strategies and venues, along with the
          infrastructure to monitor, and manage them as a fleet. Latency, determinism, and
          clean state transitions are the parts of the problem I enjoy most.
        </p>
        <p>
          Beyond low-level programming, I have a soft spot for <strong>mathematics</strong> &mdash;
          if I hadn&apos;t picked CSE, math would have been the other path.
        </p>
        <span className="profileHonor">Numbers don&apos;t lie &mdash; systems do.</span>
      </div>
    </section>
  );
};

export default ProfileIntroduction;
