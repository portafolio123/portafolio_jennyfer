import React from 'react';
import courseImage from '../assets/images/marketing_gastronomico.png';

const InfoAsignatura: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen pt-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            INFORMACIÓN DE LA ASIGNATURA
          </h1>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              {/* Main Image with adjusted height */}
              <div className="w-full max-h-[600px] overflow-hidden flex items-center justify-center bg-gray-100">
                <img 
                  src={courseImage} 
                  alt="Marketing Gastronómico" 
                  className="w-auto h-auto max-w-full max-h-[600px] object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                {/* Objetivo Section */}
                <div className="mb-12 animate-fadeIn animation-delay-200">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Mi objetivo</h2>
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    Adquirir conocimientos y habilidades en marketing de alimentos que me permitan crear 
                    conceptos innovadores y planes prácticos para promover mis futuros esfuerzos personales 
                    y para cocinar, con el objetivo de interactuar emocionalmente con la audiencia y 
                    posicionarme en el mundo gastronómico con identidad y propósito.
                  </p>
                </div>

                <hr className="my-12 border-gray-200" />

                {/* Syllabus Section */}
                <div className="mb-12 animate-fadeIn animation-delay-400">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sílabo de la asignatura</h2>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <iframe
                      src="/silabo_marketing.pdf"
                      className="w-full h-[700px] rounded-lg"
                      title="Sílabo de Marketing Gastronómico"
                    />
                  </div>
                </div>

                {/* Final Note */}
                <div className="text-center italic text-gray-700 mt-12 animate-fadeIn animation-delay-600">
                  <p className="text-lg leading-relaxed">
                    Cada clase deja huella, y el verdadero aprendizaje florece cuando hay guía, 
                    pasión y dedicación. A continuación, comparto mi experiencia junto a quien 
                    ha sido clave en este proceso: mi docente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAsignatura;