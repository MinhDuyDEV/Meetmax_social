import React from "react";
import { IconMessage } from "../../assets/icons";
import Avatar from "../Avatar";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <div className="py-[15px] md:py-[18px] pr-[20px] md:pr-[30px] pl-5 md:flex items-center gap-x-5 md:gap-x-[108px] flex">
      <Logo className="hidden transition-all md:flex"></Logo>
      <div className="block md:hidden">
        <IconMessage></IconMessage>
      </div>
      <SearchBar></SearchBar>
      <div className="flex items-center ml-auto header-profile">
        <span className="py-[9px] px-5 md:block hidden whitespace-nowrap">
          Minh Duy
        </span>
        <Avatar className="md:w-[42px] md:h-[42px] w-[35px] h-[35px]"></Avatar>
      </div>
    </div>
  );
};

export default Header;
