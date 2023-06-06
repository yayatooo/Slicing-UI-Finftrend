import React from "react";

const Button = ({ children, className, variant }) => {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "black-btn": "bg-black text-white",
    "white-btn": "bg-white text-white hover:bg-gray-4",
    "primary-btn": "bg-primary text-black hover:bg-secondary",
  };

  const pickedVariant = variants[variant];

  return (
    <button
      className={` py-4 px-9 rounded-full font-effra-reguler ${addClassName}${pickedVariant}`}
    >
      {children}
    </button>
  );
};

export default Button;
