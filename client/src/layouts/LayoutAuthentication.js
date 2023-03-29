import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../modules/dashboard/Header";

const LayoutAuthentication = () => {
  return (
    <div className="min-h-100vh bg-authentication hiddenScroll">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutAuthentication;
