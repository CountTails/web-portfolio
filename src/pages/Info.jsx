import React from 'react';
import PageTitle from '../components/PageTitle';
import NavigationList from '../components/NavList';

const HomePage = () => {
  const otherPages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div>
      <PageTitle title="Info Page" />
      <NavigationList pages={otherPages} />
    </div>
  );
};

export default HomePage;
