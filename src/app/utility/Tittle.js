import React from "react";

const Tittle = ({ children }) => {
  return (
    <h1 className="text-6xl font-effra-heavy py-16 text-center mobile:text-4xl w-11/12 mx-auto">
      {children}
    </h1>
  );
};

export default Tittle;
