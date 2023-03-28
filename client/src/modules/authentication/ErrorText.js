import React from "react";

const ErrorText = ({ children }) => {
  return (
    <span className="font-normal text-left text-body14 text-red">
      {children}
    </span>
  );
};

export default ErrorText;
