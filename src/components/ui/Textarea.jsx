import React from "react";

const Textarea = ({ className = "", ...props }) => {
  return (
    <textarea
      className={`w-full min-h-[120px] rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#7c5cff]/30 ${className}`}
      {...props}
    />
  );
};

export default Textarea;