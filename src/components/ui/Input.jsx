import React from "react";

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c5cff]/30 ${className}`}
      {...props}
    />
  );
};

export default Input;