import React from 'react';

const AlternatingBackground = ({ children, setCurrentSectionTitle }) => {
  return (
    <div className="w-full">
      {children.map((child, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? 'bg-sky-900' : 'bg-sky-600'}`}
          onMouseEnter={() => setCurrentSectionTitle(child.props.title)}
        >
          <div>{child}</div>
        </div>
      ))}
    </div>
  );
};

export default AlternatingBackground;
