import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Runners from "./pages/Runners";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/runners" element={<Runners />} />
      </Routes>
    </Router>
  );
}

export default App;