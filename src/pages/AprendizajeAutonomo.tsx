import React from 'react';

const AprendizajeAutonomo: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/349610/pexels-photo-349610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-8 animate-fadeIn">
            APRENDIZAJE AUTÓNOMO
          </h1>

          {/* Initial Quote */}
          <div className="text-white text-center mb-16 animate-fadeIn animation-delay-200">
            <p className="text-2xl italic">
              "Aquí comienza un espacio de descubrimiento personal, donde el aprendizaje nace de la curiosidad y crece con la motivación propia."
            </p>
          </div>

          {/* Personal Brand Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-slideIn">
            <div className="text-center mb-8 animate-fadeIn animation-delay-300">
              <p className="text-2xl italic text-gray-700">
                "Cada marca nace de una idea, pero crece con pasión, propósito y creatividad."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner mb-8">
              <iframe
                src="/Marca_Personal.pdf"
                className="w-full h-[600px] rounded-lg"
                title="Marca Personal"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed text-justify animate-fadeIn animation-delay-400">
              MiJey es una marca de bebidas que nace del deseo de ofrecer algo más que un producto: una experiencia. 
              Está pensada para que cada persona se sienta única, especial y conectada con lo que consume. 
              MiJey combina autenticidad, sabor y cercanía, reflejando mi esencia como futura profesional 
              de la gastronomía y mi visión de crear momentos inolvidables con cada sorbo.
            </p>
          </div>

          {/* E-WOM and Influencers Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-slideIn animation-delay-200">
            <div className="text-center mb-8">
              <p className="text-2xl italic text-gray-700">
                "La voz del cliente y la influencia digital son hoy las nuevas vitrinas del marketing."
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Influencers y e-WOM en el marketing colaborativo
            </h2>

            <div className="bg-gray-50 rounded-lg p-6 shadow-inner mb-8">
              <iframe
                src="/influencerWOM.pdf"
                className="w-full h-[600px] rounded-lg"
                title="E-WOM and Influencers"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed text-justify animate-fadeIn animation-delay-500">
              Aprendí que hoy en día la voz de los consumidores tiene un gran poder gracias al e-WOM 
              (boca a boca electrónico) y al papel de los influencers. Estos elementos pueden impulsar 
              o afectar la imagen de una marca en segundos. En el mundo gastronómico, aprovechar estas 
              herramientas de forma auténtica y estratégica puede generar mayor confianza, visibilidad 
              y conexión con el público. Como futura emprendedora, reconozco su valor para crear campañas 
              más cercanas y colaborativas.
            </p>
          </div>

          {/* Restaurant Technology Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-300 animate-slideIn animation-delay-400">
            <div className="text-center mb-8">
              <p className="text-2xl italic text-gray-700">
                "La tecnología transforma la experiencia gastronómica, conectando tradición y futuro en cada plato."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-inner mb-8">
              <iframe
                src="/restaurants_tech.pdf"
                className="w-full h-[600px] rounded-lg"
                title="Restaurant Technology"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed text-justify animate-fadeIn animation-delay-600">
              Explorar cómo la tecnología ha transformado los restaurantes me ayudó a comprender que el 
              cambio es constante y necesario. Desde los sistemas manuales del pasado hasta las herramientas 
              digitales actuales y las innovaciones del futuro, la tecnología ha mejorado la atención, la 
              experiencia del cliente y la eficiencia en cocina. Como futura profesional gastronómica, 
              reconozco la importancia de adaptarme a estos avances para ofrecer un servicio moderno, 
              competitivo y conectado con las nuevas expectativas del consumidor.
            </p>
          </div>

          {/* Customer Satisfaction Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 animate-slideIn animation-delay-600">
            <div className="text-center mb-8">
              <p className="text-2xl italic text-gray-700">
                "La satisfacción del cliente es la clave para convertir una visita en una experiencia que se repite."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-inner mb-8">
              <iframe
                src="/modelling_customer.pdf"
                className="w-full h-[600px] rounded-lg"
                title="Customer Satisfaction"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed text-justify animate-fadeIn animation-delay-700">
              Al analizar este estudio comprendí cómo la satisfacción del cliente es clave para lograr que 
              un comensal regrese a un restaurante. Factores como la calidad del servicio, la comida, el 
              ambiente y la atención al detalle influyen directamente en esa decisión. Esta información me 
              motiva a enfocarme no solo en el sabor, sino también en brindar experiencias memorables que 
              inviten al cliente a volver, algo fundamental para el éxito de cualquier emprendimiento gastronómico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeAutonomo;