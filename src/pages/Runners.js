
import React, { useEffect, useState } from "react";
import { getRunners } from "../services/api";
import { Link } from "react-router-dom";
import Header from "../styles/Header.js"; // Importando Header
import Footer from "../styles/Footer.js"; // Importando Footer
import '../styles/Home.css'; // Para as estilizações gerais
import '../styles/Runner.css'; // Importando o CSS específico para o Runner

const Runners = () => {
  const [runners, setRunners] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getRunners()
      .then((response) => setRunners(response.data))
      .catch(() => setError("Erro ao carregar corredores."));
  }, []);

  return (
    <div className="container">
      <Header /> {/* Chama o Header aqui */}
      
      <main className="main-content">
        <h1 className="title">Lista de Corredores</h1>
        {error && <p className="error">{error}</p>}
        <div className="runners-list">
          {runners.map((runner) => (
            <div key={runner.email} className="runner-card">
              <div className="runner-info">
                <p className="name">{runner.name || "Nome não informado"}</p> {/* Nome centralizado */}
                <p><strong>Email:</strong> {runner.email}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="button">Voltar para a Home</Link>
      </main>

      <Footer /> {/* Chama o Footer aqui */}
    </div>
  );
};

export default Runners;

