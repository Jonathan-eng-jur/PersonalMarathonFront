import React from "react";
import "../styles/Header.css"; // Adicione o CSS do header aqui
import logo from '../img/logo-marathon.webp'; // Certifique-se de que o logo está no caminho correto

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo Maratona do Rio 2025" className="logo" />
    </header>
  );
};

export default Header;