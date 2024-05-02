import React from 'react';
import PageTitle from '../components/PageTitle';
import NavigationList from '../components/NavList';

const HomePage = () => {
  const otherPages = [
    { name: 'Information', path: '/information' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div>
      <PageTitle title="Home Page" />
      <NavigationList pages={otherPages} />
    </div>
  );
};

export default HomePage;
