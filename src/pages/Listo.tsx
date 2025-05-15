import React from 'react';
import { Link } from 'react-router-dom';

const Listo: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          filter: 'brightness(0.6)'
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-7xl font-cursive mb-8 animate-fadeIn">¿Listo?</h1>
        
        <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
          <p className="text-xl mb-6 animate-fadeIn animation-delay-300">
            A continuación encontrará información sobre mí.
          </p>
          <p className="text-lg mb-8 animate-fadeIn animation-delay-600">
            Espero que disfrute de conocer un poco más acerca de Valeria Santos.
          </p>
          
          <Link
            to="/informacion-personal"
            className="inline-block px-8 py-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 text-lg"
          >
            Estoy ansioso por saber
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Listo;