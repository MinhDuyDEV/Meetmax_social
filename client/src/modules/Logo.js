import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ className = "" }) => {
  return (
    <NavLink
      to="/"
      className={`flex items-center justify-center gap-x-[10px] cursor-pointer ${className}`}
    >
      <img srcSet="/logo.png 4x" alt="logo" />
      <span className="font-bold text-heading3">Meetmax</span>
    </NavLink>
  );
};

export default Logo;
