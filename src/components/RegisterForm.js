import React, { useState } from "react";
import { validateName, validateEmail } from "../utils/validations";
import "../styles/RegisterForm.css";

const RegisterForm = ({ onSubmit, onCancel }) => {
  const [newRunner, setNewRunner] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(newRunner.name)) return setError("Nome inválido.");
    if (!validateEmail(newRunner.email)) return setError("E-mail inválido.");
    onSubmit(newRunner);
  };

  return (
    <div className="register-form">
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: "left" }}> 
          <label>Nome:</label>
          <input
            type="text"
            value={newRunner.name}
            onChange={(e) => setNewRunner({ ...newRunner, name: e.target.value })}
            className="input-field"
          />
        </div>
        <div style={{ textAlign: "left" }}>
          <label>Email:</label>
          <input
            type="email"
            value={newRunner.email}
            onChange={(e) => setNewRunner({ ...newRunner, email: e.target.value })}
            className="input-field"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="button-container">
          <button type="submit" className="button">
            Cadastrar
          </button>
          <button type="button" onClick={onCancel} className="button-cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;