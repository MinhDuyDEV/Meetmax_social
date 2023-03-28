import React from "react";
import { Link } from "react-router-dom";

const CheckHaveAccount = ({ text = "", to = "", children }) => {
  return (
    <div className="flex items-center justify-center font-medium text-display gap-x-5">
      <span className="text-gray">{text}</span>
      <Link to={to} className="text-blue">
        {children}
      </Link>
    </div>
  );
};

export default CheckHaveAccount;
