import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageNavigation from './components/PageNavigation';
import HomePage from './pages/HomePage';
import InfoPersonal from './pages/InfoPersonal';
import QueSigue from './pages/QueSigue';
import InfoAsignatura from './pages/InfoAsignatura';
import MedioCiclo from './pages/MedioCiclo';
import AprendizajeContacto from './pages/AprendizajeContacto';
import Listo from './pages/Listo';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listo" element={<Listo />} />
          <Route path="/informacion-personal" element={<InfoPersonal />} />
          <Route path="/que-sigue" element={<QueSigue />} />
          <Route path="/informacion-asignatura" element={<InfoAsignatura />} />
          <Route path="/medio-ciclo" element={<MedioCiclo />} />
          <Route path="/aprendizaje-contacto" element={<AprendizajeContacto />} />
        </Routes>
        <PageNavigation />
      </div>
    </Router>
  );
}

export default App;