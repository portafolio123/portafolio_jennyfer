import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="text-xl font-semibold text-gray-800">Portafolio</div>
          
          <div className="hidden md:flex items-center space-x-4 ml-10">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Página Principal
            </Link>
            <Link to="/listo" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              ¿Listo?
            </Link>
            <Link to="/informacion-personal" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Información Personal
            </Link>
            <Link to="/que-sigue" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              ¿Qué sigue?
            </Link>
            <Link to="/informacion-asignatura" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Información de la Asignatura
            </Link>
            <Link to="/medio-ciclo" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Medio Ciclo
            </Link>
            <Link to="/aprendizaje-contacto" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Aprendizaje en Contacto con el D...
            </Link>
            
            <div className="relative">
              <button
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/additional-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Additional Link 1
                  </Link>
                  <Link to="/additional-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Additional Link 2
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="ml-auto flex items-center">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
              <Search className="h-5 w-5" />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-4">
            <button className="text-gray-500 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;