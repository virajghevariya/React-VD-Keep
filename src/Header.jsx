import React from "react";
import logo from "./Images/icon.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Keep" width="50" height="50" />
        <h1>VD_keep</h1>
      </div>
    </>
  );
};

export default Header;
