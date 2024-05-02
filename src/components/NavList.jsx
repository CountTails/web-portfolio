import React from 'react';
import { Link } from 'react-router-dom';

const NavigationList = ({ pages }) => {
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.name}>
          <Link to={page.path}>{page.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
