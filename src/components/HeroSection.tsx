import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          filter: 'brightness(0.5)'
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-7xl font-cursive mb-4 animate-fadeIn">¡Bienvenido!</h1>
        <p className="text-xl font-light italic mb-8 animate-fadeIn animation-delay-300">
          Hecho por: Jennyfer Roxana
        </p>
        
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-6 rounded-lg animate-fadeIn animation-delay-600">
          <p className="text-lg mb-6">
            Buenos días/tardes/noches. Está a punto de sumergirse dentro de un espacio de aprendizaje, proyectos que
            incentivan a la mejora constante y de creatividad. Cada tema invita a explorar más allá de lo común.
          </p>
          <p className="text-lg font-semibold mb-8">
            Así que, ¿Qué espera?
          </p>
          <Link 
            to="/listo" 
            className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300"
          >
            Comenzar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;