import React from "react";

const Button = ({
  children,
  full = "w-full",
  type = "button",
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-medium text-white mb-[30px] bg-blue py-[14px] text-display rounded-[10px] ${full} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
