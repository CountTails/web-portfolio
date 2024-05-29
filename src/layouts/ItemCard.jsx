import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md flex md:flex-col flex-row items-center">
        {children}
      </div>
    </div>
  );
};

const CardLogo = ({ src, alt }) => {
  return (
    <div className="flex justify-center pt-6">
      <img
        src={src}
        alt={alt}
        className="w-20 h-20 rounded-full border-2 border-gray-200"
      />
    </div>
  );
};

const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-bold text-center py-4">{children}</h2>;
};

const CardImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
    />
  );
};

const CardText = ({ children }) => {
  return <p className="text-center text-lg text-gray-600 p-4">{children}</p>;
};

const CardButton = ({ children, href }) => {
  return (
    <div className="flex justify-center py-4">
      <a
        href={href}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </a>
    </div>
  );
};

export { Card, CardLogo, CardTitle, CardImage, CardText, CardButton };
