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
import AprendizajePractico from './pages/AprendizajePractico';
import AprendizajeAutonomo from './pages/AprendizajeAutonomo';
import FinCiclo from './pages/FinCiclo';
import AprendizajeContacto2 from './pages/AprendizajeContacto2';
import AprendizajePractico2 from './pages/AprendizajePractico2';
import AprendizajeAutonomo2 from './pages/AprendizajeAutonomo2';
import LogrosAlcanzados from './pages/LogrosAlcanzados';
import Gracias from './pages/Gracias';
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
          <Route path="/aprendizaje-practico" element={<AprendizajePractico />} />
          <Route path="/aprendizaje-autonomo" element={<AprendizajeAutonomo />} />
          <Route path="/fin-ciclo" element={<FinCiclo />} />
          <Route path="/aprendizaje-contacto-2" element={<AprendizajeContacto2 />} />
          <Route path="/aprendizaje-practico-2" element={<AprendizajePractico2 />} />
          <Route path="/aprendizaje-autonomo-2" element={<AprendizajeAutonomo2 />} />
          <Route path="/logros-alcanzados" element={<LogrosAlcanzados />} />
          <Route path="/gracias" element={<Gracias />} />
        </Routes>
        <PageNavigation />
      </div>
    </Router>
  );
}

export default App;