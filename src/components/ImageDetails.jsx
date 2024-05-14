import React from 'react';

function ImageDetails({ image, details }) {
  return (
    <div className="flex flex-col lg:flex-row w-full py-6">
      <img src={image} alt="Image" className="w-full max-h-64 object-contain lg:w-1/2" />
      <div className="w-full lg:w-1/2 flex flex-col justify-center pl-4 pr-4">
        {Object.keys(details).map((key) => (
          <div key={key} className="flex justify-between mb-2">
            <p className="text-right">{key}:</p>
            <p className="text-left">{details[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDetails;
