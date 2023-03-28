import React from "react";

const GroupForm = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col gap-y-[6px] md:gap-y-[10px] md:mb-5 mb-[14px] ${className}`}
    >
      {children}
    </div>
  );
};

export default GroupForm;
