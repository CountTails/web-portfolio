import React from 'react';

const AlternatingBackground = ({ children }) => {
  return (
    <div className="w-full">
      {children.map((child, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? 'bg-sky-900' : 'bg-sky-600'} h-screen`}
        >
          <div>{child}</div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingBackground;
