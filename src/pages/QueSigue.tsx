import React from 'react';
import teacherPhoto from '../assets/images/ing.jpg';

const QueSigue: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            ACERCA DE MI DOCENTE
          </h1>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fadeIn animation-delay-200">
                Agradecimiento a mi docente
              </h2>

              {/* Teacher's photo - adjusted for complete view */}
              <div className="w-full max-h-[800px] bg-gray-200 rounded-lg mb-8 overflow-hidden shadow-xl transform hover:shadow-2xl transition-all duration-300 animate-fadeIn animation-delay-400 flex items-center justify-center">
                <img 
                  src={teacherPhoto} 
                  alt="Ing. Giovanny Haro Sosa" 
                  className="w-auto h-auto max-w-full max-h-[800px] object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Teacher's name with animation */}
              <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center animate-fadeIn animation-delay-600 hover:text-gray-600 transition-colors duration-300">
                Ing. Giovanny Haro Sosa, Phd.
              </h3>

              {/* Appreciation text with animations */}
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed animate-fadeIn animation-delay-800">
                <p className="hover:text-gray-900 transition-colors duration-300">
                  Durante esta materia de Marketing Gastronómico, he tenido la guía del docente 
                  Ing. Giovanny Haro Sosa, quien no solo ha compartido conocimientos teóricos y 
                  prácticos, sino que también ha inspirado el compromiso y la creatividad en cada proyecto.
                </p>
                <p className="hover:text-gray-900 transition-colors duration-300">
                  Su enfoque motivador y su pasión por la gastronomía han sido clave para que 
                  este aprendizaje sea significativo y aplicable a mi futuro profesional.
                </p>
                <p className="text-xl font-medium text-center mt-8 text-pink-600 hover:text-pink-700 transition-colors duration-300 animate-pulse">
                  Gracias por ser parte de este proceso formativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueSigue;