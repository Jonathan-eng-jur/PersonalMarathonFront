
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRunners } from "../services/runnerService.js";
import Footer from "../styles/Footer.js"; 
import Header from "../styles/Header.js";
import '../styles/Home.css';
import '../styles/Runner.css';

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
      <Header /> 
      <main className="main-content">
        <h1 className="title">Lista de Corredores</h1>
        {error && <p className="error">{error}</p>}
        <div className="runners-list">
          {runners.map((runner) => (
            <div key={runner.email} className="runner-card">
              <div className="runner-info">
                <p className="name">{runner.name || "Nome não informado"}</p>
                <p><strong>Email:</strong> {runner.email}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="button">Voltar para a Home</Link>
      </main>

      <Footer />
    </div>
  );
};

export default Runners;

