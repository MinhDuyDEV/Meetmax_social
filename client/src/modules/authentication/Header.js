import React from "react";
import { IconDown } from "../../assets/icons";
import Logo from "../Logo";

const Header = () => {
  return (
    <div className="flex items-center px-[30px] py-[20px] w-full justify-between md:mb-[30px] mb-[40px]">
      <Logo></Logo>
      <div className="flex items-center justify-center gap-5 px-5 py-2 cursor-pointer boxChangeLanguage">
        <span className="text-opacity-60 text-body14">English (UK)</span>
        <IconDown></IconDown>
      </div>
    </div>
  );
};

export default Header;
