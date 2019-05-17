import React from "react";
import logo from "../assets/logo.png";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.Header}>
      <img className={s.Logo} src={logo} alt="Logo" />
      <h1 className={s.Title}>Develops Blog</h1>
    </div>
  );
};

export default Header;
