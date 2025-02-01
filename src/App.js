import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Importe sua página Home
import Runners from "./pages/Runners"; // Importe o componente Runners

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runners" element={<Runners />} /> {/* Adiciona a rota para Runners */}
      </Routes>
    </Router>
  );
}

export default App;