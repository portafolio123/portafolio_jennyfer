import React from 'react';

const AprendizajePracticoExperimental: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-extrabold text-center text-white mb-12 animate-fadeIn">
            APRENDIZAJE PRÁCTICO EXPERIMENTAL
          </h1>

          {/* Starbucks Case Study */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fadeIn animation-delay-200">
              Caso Starbucks
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-inner animate-fadeIn animation-delay-300">
                <h3 className="text-xl font-semibold mb-4 text-center">Análisis Final</h3>
                <iframe
                  src="/STARBUCKS_FINAL.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Starbucks Final"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-inner animate-fadeIn animation-delay-400">
                <h3 className="text-xl font-semibold mb-4 text-center">Análisis del Caso</h3>
                <iframe
                  src="/analisis_caso_starbucks.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Análisis Caso Starbucks"
                />
              </div>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-justify animate-fadeIn animation-delay-500">
              Analizar el caso de Starbucks me permitió entender cómo una marca puede construir una identidad sólida y global, 
              no solo a través de su producto, sino por medio de la experiencia que ofrece al cliente. Desde la ambientación 
              de sus locales hasta el trato personalizado y el uso estratégico del marketing emocional, Starbucks demuestra 
              que el éxito nace de conectar con las personas. Esta visión me inspira a crear un concepto gastronómico con 
              alma, que haga sentir al cliente como parte de algo especial.
            </p>
          </div>

          {/* Crepes & Waffles Case Study */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fadeIn animation-delay-600">
              CREPPES & WAFFLES
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner mb-8 animate-fadeIn animation-delay-700">
              <iframe
                src="/creepes_waffles.pdf"
                className="w-full h-[500px] rounded-lg"
                title="Crepes & Waffles"
              />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-justify animate-fadeIn animation-delay-800">
              Estudiar el caso de Crepes & Waffles me enseñó que una marca puede destacar no solo por su oferta 
              gastronómica, sino por su propósito social y humano. Esta empresa logró diferenciarse al combinar 
              calidad, calidez y compromiso, especialmente al brindar oportunidades laborales a mujeres cabeza de 
              hogar. Me inspira a pensar en un negocio con conciencia social, donde el sabor se combine con valores 
              que dejen huella en la sociedad.
            </p>
          </div>

          {/* Brand Project */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-fadeIn animation-delay-600">
              Marca Grupal
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-inner animate-fadeIn animation-delay-300">
                <h3 className="text-xl font-semibold mb-4 text-center">Marca Grupal</h3>
                <iframe
                  src="/marca_grupal.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Marca Grupal"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-inner animate-fadeIn animation-delay-400">
                <h3 className="text-xl font-semibold mb-4 text-center">Analísis de Bon Appetit</h3>
                <iframe
                  src="/Analísis_de_Bon_Appetit.pdf"
                  className="w-full h-[500px] rounded-lg"
                  title="Analísis de Bon Appetit"
                />
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed text-justify animate-fadeIn animation-delay-1000">
              Bon Appétit es el resultado del trabajo en equipo, la creatividad y el amor por la cocina. 
              Representa una propuesta gastronómica fresca, elegante y pensada para conquistar todos los sentidos. 
              En este proyecto grupal, unimos talentos y pasiones para crear una marca que conecta con el cliente 
              desde la presentación hasta el último bocado.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AprendizajePracticoExperimental;