import React, { useState } from 'react';

function ExpandableSummary({ summary, details }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900">
      <div className="flex justify-between items-center">
        <p className="text-lg px-8">{summary}</p>
        <button
          className="px-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleToggle}
        >
          {isOpen ? 'Collapse' : 'Expand'}
        </button>
      </div>
      {isOpen && <div>{details}</div>}
    </div>
  );
}

export default ExpandableSummary;
