import React from "react";
import "../styles/Header.css";
import logo from '../img/logo-marathon.webp';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Maratona do Rio 2025" className="logo" />
    </header>
  );
};

export default Header;