import React from "react";

const ButtonSignIn = ({ icon, children = "" }) => {
  return (
    <button
      type="button"
      className="flex items-center gap-x-2 md:gap-x-[25px] bg-gray bg-opacity-5 md:px-[30px] px-[6px] py-[11px] md:py-[14px] w-full md:rounded-[10px] rounded-[6px] cursor-pointer"
    >
      {icon}
      <span className="text-body12 md:text-display">{children}</span>
    </button>
  );
};

export default ButtonSignIn;
