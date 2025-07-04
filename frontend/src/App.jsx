import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PatientRecord from "./components/PatientRecord";

// Si tu as d'autres pages, tu peux les importer ici
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/patientrecord" element={<PatientRecord />} />

          {/* Exemples de pages supplémentaires */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
        </Routes>

        {/* Footer global */}
        <div className="bg-white shadow-lg border-t p-2 px-4 md:px-44 z-50">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
