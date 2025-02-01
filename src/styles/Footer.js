import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Ícones para as redes sociais
import "../styles/Footer.css"; // Adicione o CSS do footer aqui

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Personal Marathon | Criado por Jonathan Cavalcanti</p>
      <p>Sigam-me para mais atualizações e conteúdo:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jonathan-cavalcanti-dev/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Jonathan-eng-jur" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/jowcavalcanti/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;