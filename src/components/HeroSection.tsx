import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo de la sección */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          filter: 'brightness(0.5)',
        }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-7xl font-cursive mb-4 animate-fadeIn">Bienvenido a mi portafolio académico</h1>
        <p className="text-xl font-light italic mb-8 animate-fadeIn animation-delay-300">
          Hecho por: Jennyfer Roxana
        </p>

        {/* Fondo rosado transparente */}
        <div className="max-w-2xl mx-auto bg-pink-500/30 backdrop-blur-sm p-6 rounded-lg animate-fadeIn animation-delay-600">
          <p className="text-lg mb-6">
            Soy Jennyfer Roxana Aulla Caicedo, estudiante de la carrera de Gastronomía en la Escuela Superior Politécnica de Chimborazo. Este portafolio reúne los conocimientos, estrategias y propuestas creativas que he desarrollado en la asignatura de Marketing Gastronómico.
          </p>
          <p className="text-lg font-semibold mb-8">
            A través de este espacio, comparto cómo la pasión por la cocina puede integrarse con el mundo del marketing para crear experiencias únicas, marcas memorables y propuestas que conecten con el comensal más allá del plato.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;