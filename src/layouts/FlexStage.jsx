import React from 'react';

const FlexStage = ({ children }) => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 flex flex-wrap justify-center">
      {children}
    </div>
  );
};

export default FlexStage;
