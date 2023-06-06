import React from "react";

const Brands = ({ children }) => {
  return (
    <div className="w-64 flex items-center justify-center bg-gray-3 py-8 px-12 rounded-lg">
      <img src={children} />
    </div>
  );
};

export default Brands;
