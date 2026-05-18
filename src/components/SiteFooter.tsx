import React from 'react';

const SiteFooter: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="siteFooter">
      &copy; {year} Yicheng (Bill) Luo &middot; Built with Next.js
    </footer>
  );
};

export default SiteFooter;
