import React from "react";

const Title = ({ heading = "", desc = "" }) => {
  return (
    <div className="flex flex-col gap-y-[10px] text-center mb-[30px] max-w-[281px] mx-auto md:max-w-[425px]">
      <h1 className="font-bold transition-all md:font-black md:text-heading1 text-heading3">
        {heading}
      </h1>
      <p className="transition-all text-body14 md:text-display">{desc}</p>
    </div>
  );
};

export default Title;
