import React from 'react';
import { Link } from 'react-router-dom';

const NavigationList = ({ pages }) => {
  return (
    <ul className="text-lg text-center">
      {pages.map((page) => (
        <li key={page.name} className="my-2">
          <Link to={page.path} className="hover:text-blue-600 hover:underline">
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
