import React, { useState } from "react";

function SummaryCollection({ children }) {
  const [openStates, setOpenStates] = useState(
    React.Children.map(children, () => false)
  );

  const handleToggleAll = () => {
    setOpenStates((prevStates) => prevStates.map(() => !prevStates.every((state) => state)));
  };

  const handleToggle = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div>
      <button
        className="px-8 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={handleToggleAll}
      >
        {openStates.every((state) => state) ? 'Collapse All' : 'Expand All'}
      </button>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openStates[index],
          handleToggle: () => handleToggle(index),
        })
      )}
    </div>
  );
}

export default SummaryCollection;
