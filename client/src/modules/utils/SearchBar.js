import React from "react";
import { IconSearch } from "../../assets/icons";

const SearchBar = ({ placeholder = "Search for something here..." }) => {
  return (
    <div className="relative inline-block">
      <input
        type="text"
        placeholder={placeholder}
        className="md:text-body14 text-body12 border outline-none font-medium placeholder:font-normal placeholder:text-opacity-80 `placeholder:text-body12 md:placeholder:text-display border-gray border-opacity-40 rounded-[6px] md:rounded-[10px] py-[6px] md:py-[10px] pr-5 md:pr-[30px] pl-[34px] md:pl-[50px] w-full md:min-w-[542px] min-w-[235px]"
      />
      <div className="absolute top-0 left-0 flex items-center justify-center md:translate-x-[20px] translate-x-[10px] md:translate-y-3/4 translate-y-2/4">
        <IconSearch></IconSearch>
      </div>
    </div>
  );
};

export default SearchBar;
