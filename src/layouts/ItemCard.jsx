import React from 'react';

const Card = ({
  logo,
  title,
  image,
  text,
  button,
  buttonLink,
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
        {logo && (
          <div className="flex justify-center pt-6">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-20 rounded-full border-2 border-gray-200"
            />
          </div>
        )}
        <h2 className="text-xl font-bold text-center py-4">{title}</h2>
        {image && (
          <img
            src={image}
            alt="Image"
            className="w-full h-48 object-cover"
          />
        )}
        {text && (
          <p className="text-lg text-gray-600 p-4">{text}</p>
        )}
        {button && (
          <div className="flex justify-center py-4">
            <a
              href={buttonLink}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {button}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
