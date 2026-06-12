import React from "react";

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition";

  const variants = {
    default: "bg-[#7c5cff] text-white hover:bg-[#6b4de0]",
    outline:
      "border-2 border-[#7c5cff] text-[#7c5cff] hover:bg-[#ede9fe]",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;