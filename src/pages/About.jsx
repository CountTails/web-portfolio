import React from 'react';
import PageTitle from '../components/PageTitle';
import NavigationList from '../components/NavList';

const HomePage = () => {
  const otherPages = [
    { name: 'Information', path: '/information' },
    { name: 'Home', path: '/' },
  ];

  return (
    <div className="bg-gray-800 text-gray-200">
      <PageTitle title="About Page" />
      <NavigationList pages={otherPages} />
    </div>
  );
};

export default HomePage;
