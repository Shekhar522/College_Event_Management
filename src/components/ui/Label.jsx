import React from "react";

const Label = ({ children, className = "", ...props }) => {
  return (
    <label
      className={`block text-sm font-semibold text-[#1e1b4b] ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;