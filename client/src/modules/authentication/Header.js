import React from "react";
import { NavLink } from "react-router-dom";
import { IconDown } from "../../assets/icons";

const Header = () => {
  return (
    <div className="flex items-center px-[30px] py-[20px] w-full justify-between md:mb-[30px] mb-[40px]">
      <NavLink
        to="/"
        className="flex items-center justify-center gap-x-[10px] cursor-pointer"
      >
        <img srcSet="/logo.png 4x" alt="logo" />
        <span className="font-bold text-heading3">Meetmax</span>
      </NavLink>
      <div className="flex items-center justify-center gap-5 px-5 py-2 cursor-pointer boxChange">
        <span className="text-opacity-60">English (UK)</span>
        <IconDown></IconDown>
      </div>
    </div>
  );
};

export default Header;
